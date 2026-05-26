import { usePublish } from '../../hooks/usePublish';

export function ProductPublishDetail() {
  const state = usePublish();

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
        <h4 className="bio-capabilities__label">Canales</h4>
        <ul className="bio-capabilities__grid">
          {state.data.channels.map((channel) => (
            <li key={channel.id} className="bio-cap-card">
              <span className="bio-cap-card__icon" aria-hidden="true">
                {channel.id === 'mobile' ? '◫' : '⬚'}
              </span>
              <h5>{channel.title}</h5>
              <p>{channel.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="bio-capabilities">
        <h4 className="bio-capabilities__label">Capacidades</h4>
        <ul className="bio-capabilities__grid">
          {state.data.capabilities.map((cap) => (
            <li key={cap.id} className="bio-cap-card">
              <h5>{cap.title}</h5>
              <p>{cap.description}</p>
            </li>
          ))}
        </ul>
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
