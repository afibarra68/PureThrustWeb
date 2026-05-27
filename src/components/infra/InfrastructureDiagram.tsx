import { useInfrastructure } from '../../hooks/useInfrastructure';
import { SectionShell } from '../ui/SectionShell';
import { ArchitectureOrbit } from './ArchitectureOrbit';

export function InfrastructureDiagram() {
  const state = useInfrastructure();

  const sectionTitle =
    state.status === 'success'
      ? (state.data.sectionTitle ?? 'ARQUITECTURA QUE MUEVE')
      : 'ARQUITECTURA QUE MUEVE';
  const sectionSubtitle =
    state.status === 'success'
      ? (state.data.sectionSubtitle ??
        'El suelo técnico que sostiene cada release target')
      : 'El suelo técnico que sostiene cada release target';

  return (
    <SectionShell
      id="herramientas"
      title={sectionTitle}
      subtitle={sectionSubtitle}
    >
      {state.status === 'loading' ? (
        <p className="state state--loading">Cargando arquitectura…</p>
      ) : null}
      {state.status === 'error' ? (
        <p className="state state--error" role="alert">
          {state.message}
        </p>
      ) : null}
      {state.status === 'success' ? <ArchitectureOrbit layers={state.data.layers} /> : null}
    </SectionShell>
  );
}
