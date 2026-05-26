import { useInfrastructure } from '../../hooks/useInfrastructure';
import type { InfraLayer } from '../../types/infrastructure.types';
import { SectionShell } from '../ui/SectionShell';

const ICON_GLYPH: Record<string, string> = {
  globe: '◉',
  shield: '⛨',
  gateway: '⇌',
  scale: '⚖',
  thread: '⫘',
  box: '▣',
  redis: '◎',
  db: '⬡',
  pipeline: '⟿',
  chart: '◫',
};

function LayerColumn({ layer, isLast }: { layer: InfraLayer; isLast: boolean }) {
  return (
    <div className="infra-layer">
      <span className="infra-layer__label">{layer.label}</span>
      <div className="infra-layer__nodes">
        {layer.nodes.map((node) => (
          <article key={node.id} className="infra-node" data-node={node.id}>
            <span className="infra-node__icon" aria-hidden="true">
              {ICON_GLYPH[node.icon] ?? '•'}
            </span>
            <div>
              <h4 className="infra-node__name">{node.name}</h4>
              <p className="infra-node__tech">{node.tech}</p>
            </div>
          </article>
        ))}
      </div>
      {!isLast ? <div className="infra-connector" aria-hidden="true" /> : null}
    </div>
  );
}

export function InfrastructureDiagram() {
  const state = useInfrastructure();

  return (
    <SectionShell id="infra" title="Infraestructura" subtitle="Vista de capas y flujo de release">
      {state.status === 'loading' ? (
        <p className="state state--loading">Cargando diagrama…</p>
      ) : null}
      {state.status === 'error' ? (
        <p className="state state--error" role="alert">
          {state.message}
        </p>
      ) : null}
      {state.status === 'success' ? (
        <div className="infra-diagram">
          <header className="infra-diagram__head">
            <h3>{state.data.title}</h3>
            <p>{state.data.subtitle}</p>
          </header>
          <div className="infra-diagram__flow">
            {state.data.layers.map((layer, index) => (
              <LayerColumn
                key={layer.id}
                layer={layer}
                isLast={index === state.data.layers.length - 1}
              />
            ))}
          </div>
          <p className="infra-diagram__footnote">
            {state.data.connections.length} conexiones documentadas · datos desde API libre
          </p>
        </div>
      ) : null}
    </SectionShell>
  );
}
