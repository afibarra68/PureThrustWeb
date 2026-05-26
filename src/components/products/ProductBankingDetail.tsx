import { useBanking } from '../../hooks/useBanking';

export function ProductBankingDetail() {
  const state = useBanking();

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
      <div className="bio-execution">
        <h4 className="bio-execution__label">{state.data.services.title}</h4>
        {state.data.services.subtitle ? (
          <p className="bio-execution__subtitle">{state.data.services.subtitle}</p>
        ) : null}
        <ul className="bio-execution__list">
          {state.data.services.items.map((item) => (
            <li key={item.id} className="bio-execution__item">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
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
