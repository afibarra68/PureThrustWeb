import { type FormEvent, useState } from 'react';
import {
  LaunchSignupError,
  submitLaunchSignup,
} from '../../services/launchSignup';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function LaunchSignupForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedEmail && !trimmedMessage) {
      setErrorMessage('Indica tu correo, un mensaje, o ambos.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      await submitLaunchSignup({
        email: trimmedEmail,
        message: trimmedMessage,
      });
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof LaunchSignupError
          ? error.message
          : 'No se pudo enviar. Comprueba tu conexión e inténtalo de nuevo.',
      );
    }
  }

  if (status === 'success') {
    return (
      <div className="launch-form launch-form--success" role="status">
        <p className="launch-form__success-title">¡Gracias! Recibimos tu mensaje.</p>
        <p className="launch-form__success-text">
          Nuestro equipo revisará tu caso y se pondrá en contacto contigo pronto.
        </p>
      </div>
    );
  }

  const isLoading = status === 'loading';

  return (
    <form className="launch-form" onSubmit={handleSubmit} noValidate>
      {status === 'error' && errorMessage ? (
        <p className="launch-form__error" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <label className="launch-form__field">
        <span className="launch-form__label">Correo electrónico</span>
        <input
          className="launch-form__input"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="tu@correo.com"
          value={email}
          disabled={isLoading}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label className="launch-form__field">
        <span className="launch-form__label">Mensaje (opcional)</span>
        <textarea
          className="launch-form__input launch-form__input--area"
          name="message"
          rows={3}
          placeholder="Cuéntanos qué te interesa o cómo podemos ayudarte"
          value={message}
          disabled={isLoading}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      <button
        className="btn btn--primary launch-form__submit"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Enviando…' : 'Cuéntanos tu caso'}
      </button>
      <p className="launch-form__hint">
        Respuesta personalizada. Sin spam.
      </p>
    </form>
  );
}
