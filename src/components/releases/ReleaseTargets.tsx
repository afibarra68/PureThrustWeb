import { useReleases } from '../../hooks/useReleases';
import { SectionShell } from '../ui/SectionShell';
import { StatusBadge } from '../ui/StatusBadge';

export function ReleaseTargets() {
  const state = useReleases();

  return (
    <SectionShell
      id="releases"
      title="Release targets"
      subtitle="El pivote operativo: qué se libera, cuándo y con qué tracción"
    >
      {state.status === 'loading' ? (
        <p className="state state--loading">Cargando releases…</p>
      ) : null}
      {state.status === 'error' ? (
        <p className="state state--error" role="alert">
          {state.message}
        </p>
      ) : null}
      {state.status === 'success' ? (
        <>
          {state.data.pivot ? (
            <p className="release-pivot">{state.data.pivot}</p>
          ) : null}
          <p className="meta">
            Actualizado {state.data.updatedAt} · {state.data.domain}
          </p>
          <ul className="release-list">
            {state.data.targets.map((target) => (
              <li key={target.id} className="release-card">
                <div className="release-card__top">
                  <div>
                    <h3 className="release-card__name">{target.name}</h3>
                    <p className="release-card__version">v{target.version}</p>
                  </div>
                  <StatusBadge status={target.status} />
                </div>
                <p className="release-card__eta">ETA {target.eta}</p>
                <ul className="release-card__highlights">
                  {target.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </SectionShell>
  );
}
