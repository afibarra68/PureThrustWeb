import { useMemo } from 'react';
import { useReleases } from '../../hooks/useReleases';
import type { ReleaseTarget } from '../../types/releases.types';
import { SectionShell } from '../ui/SectionShell';
import { ReleaseCycleRail } from './ReleaseCycleRail';

function sortByOrder(targets: readonly ReleaseTarget[]): ReleaseTarget[] {
  return [...targets].sort((a, b) => a.order - b.order);
}

export function ReleaseTargets() {
  const state = useReleases();

  const sortedTargets = useMemo(() => {
    if (state.status !== 'success') {
      return [];
    }
    return sortByOrder(state.data.targets);
  }, [state]);

  return (
    <SectionShell
      id="releases"
      title="Release targets"
      subtitle="En cada proyecto que realizamos, cada lanzamiento es único, con alto impacto en el negocio"
    >
      {state.status === 'loading' ? (
        <p className="state state--loading">Cargando release targets…</p>
      ) : null}
      {state.status === 'error' ? (
        <p className="state state--error" role="alert">
          {state.message}
        </p>
      ) : null}
      {state.status === 'success' ? (
        <ReleaseCycleRail targets={sortedTargets} />
      ) : null}
    </SectionShell>
  );
}
