const RECIPIENT =
  import.meta.env.VITE_LAUNCH_SIGNUP_EMAIL ?? 'clientes@thrustpure.com';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? '';
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_FORM_ID ?? '';

export type LaunchSignupPayload = {
  readonly email: string;
  readonly message: string;
};

export class LaunchSignupError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LaunchSignupError';
  }
}

async function parseJsonResponse(response: Response): Promise<unknown> {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

function assertOk(response: Response, body: unknown, fallback: string): void {
  if (response.ok) {
    return;
  }

  const detail =
    body && typeof body === 'object' && 'message' in body
      ? String((body as { message: unknown }).message)
      : fallback;

  throw new LaunchSignupError(detail);
}

async function submitViaWeb3Forms(payload: LaunchSignupPayload): Promise<void> {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      subject: 'Consulta — Thrust Pure',
      from_name: 'Landing thrustpure.com',
      email: payload.email || RECIPIENT,
      message: buildBody(payload),
    }),
  });

  const body = await parseJsonResponse(response);
  assertOk(response, body, 'No se pudo enviar el formulario. Intenta de nuevo.');
}

async function submitViaFormspree(payload: LaunchSignupPayload): Promise<void> {
  const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      email: payload.email,
      message: buildBody(payload),
      _subject: 'Consulta — Thrust Pure',
      _replyto: payload.email || undefined,
    }),
  });

  const body = await parseJsonResponse(response);
  assertOk(response, body, 'No se pudo enviar el formulario. Intenta de nuevo.');
}

async function submitViaFormSubmit(payload: LaunchSignupPayload): Promise<void> {
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(RECIPIENT)}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: payload.email || 'no-indicado@thrustpure.com',
        message: buildBody(payload),
        _subject: 'Consulta — Thrust Pure',
        _template: 'table',
        _captcha: 'false',
      }),
    },
  );

  const body = await parseJsonResponse(response);
  assertOk(
    response,
    body,
    'No se pudo enviar. Si es la primera vez, confirma el enlace que FormSubmit envió a la bandeja de entrada.',
  );
}

function buildBody(payload: LaunchSignupPayload): string {
  const lines = [
    'Nueva consulta desde thrustpure.com',
    '',
    `Correo: ${payload.email || '(no indicado)'}`,
    '',
    'Mensaje:',
    payload.message || '(sin mensaje)',
  ];
  return lines.join('\n');
}

/** Envía el formulario de preventa a la bandeja configurada (por defecto clientes@thrustpure.com). */
export async function submitLaunchSignup(
  payload: LaunchSignupPayload,
): Promise<void> {
  if (WEB3FORMS_KEY) {
    await submitViaWeb3Forms(payload);
    return;
  }

  if (FORMSPREE_ID) {
    await submitViaFormspree(payload);
    return;
  }

  await submitViaFormSubmit(payload);
}

export function getLaunchSignupRecipient(): string {
  return RECIPIENT;
}
