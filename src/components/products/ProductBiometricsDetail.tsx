import { useBiometrics } from '../../hooks/useBiometrics';
import type { BiometricFlowStep, BiometricModality } from '../../types/biometrics.types';

const FLOW_ICONS: Record<string, string> = {
  scan: '◎',
  vault: '⬡',
  check: '✓',
  key: '⚷',
  gate: '⇥',
};

const MODALITY_ICONS: Record<BiometricModality, string> = {
  face: '◉',
  fingerprint: '☷',
  liveness: '◐',
  voice: '♫',
};

function FlowStep({ step, isLast }: { step: BiometricFlowStep; isLast: boolean }) {
  return (
    <li className="bio-flow__step">
      <div className="bio-flow__node">
        <span className="bio-flow__order">{step.order}</span>
        <span className="bio-flow__icon" aria-hidden="true">
          {FLOW_ICONS[step.icon] ?? '•'}
        </span>
        <div>
          <h4 className="bio-flow__title">{step.title}</h4>
          <p className="bio-flow__desc">{step.description}</p>
        </div>
      </div>
      {!isLast ? <div className="bio-flow__connector" aria-hidden="true" /> : null}
    </li>
  );
}

export function ProductBiometricsDetail() {
  const state = useBiometrics();

  if (state.status === 'loading') {
    return <p className="state state--loading">Cargando producto…</p>;
  }
  if (state.status === 'error') {
    return (
      <p className="state state--error" role="alert">
        {state.message}
      </p>
    );
  }
  if (state.status !== 'success') return null;

  return (
    <div className="bio-platform bio-platform--product">
      <div className="bio-capabilities">
        <h4 className="bio-capabilities__label">Capacidades</h4>
        <ul className="bio-capabilities__grid">
          {state.data.capabilities.map((cap) => (
            <li key={cap.id} className="bio-cap-card">
              <span className="bio-cap-card__icon" aria-hidden="true">
                {MODALITY_ICONS[cap.modality]}
              </span>
              <h5>{cap.title}</h5>
              <p>{cap.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {state.data.executionStack ? (
        <div className="bio-execution">
          <h4 className="bio-execution__label">{state.data.executionStack.title}</h4>
          {state.data.executionStack.subtitle ? (
            <p className="bio-execution__subtitle">{state.data.executionStack.subtitle}</p>
          ) : null}
          <ul className="bio-execution__list">
            {state.data.executionStack.items.map((item) => (
              <li key={item.id} className="bio-execution__item">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="bio-flow-panel">
        <h4 className="bio-flow-panel__label">Flujo de verificación</h4>
        <ol className="bio-flow">
          {state.data.flow.map((step, i) => (
            <FlowStep
              key={step.id}
              step={step}
              isLast={i === state.data.flow.length - 1}
            />
          ))}
        </ol>
      </div>

      <div className="bio-integrations">
        <h4 className="bio-integrations__label">Integrado con</h4>
        <ul className="bio-integrations__chips">
          {state.data.integrations.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
