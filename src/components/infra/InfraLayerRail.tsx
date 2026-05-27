import type { InfraLayer } from '../../types/infrastructure.types';
import { useHorizontalCycleRail } from '../../hooks/useHorizontalCycleRail';

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

function InfraLayerCard({
  layer,
  step,
}: {
  readonly layer: InfraLayer;
  readonly step: number;
}) {
  return (
    <li className="infra-rail__slide">
      <article className="infra-layer-card">
        <header className="infra-layer-card__header">
          <div className="infra-layer-card__step" aria-hidden="true">
            {String(step).padStart(2, '0')}
          </div>
          <h3 className="infra-layer-card__name">{layer.label}</h3>
        </header>
        <ul className="infra-layer-card__nodes">
          {layer.nodes.map((node) => (
            <li key={node.id} className="infra-layer-card__node">
              <span className="infra-layer-card__icon" aria-hidden="true">
                {ICON_GLYPH[node.icon] ?? '•'}
              </span>
              <div>
                <p className="infra-layer-card__node-name">{node.name}</p>
                <p className="infra-layer-card__node-tech">{node.tech}</p>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
}

type InfraLayerRailProps = {
  readonly layers: readonly InfraLayer[];
};

export function InfraLayerRail({ layers }: InfraLayerRailProps) {
  const { viewportRef, scroll, railProps } = useHorizontalCycleRail({
    slideSelector: '.infra-rail__slide',
  });

  return (
    <div className="infra-rail" {...railProps}>
      <div className="infra-rail__ring" aria-hidden="true" />
      <div className="infra-rail__toolbar">
        <p className="infra-rail__hint">
          Ciclo de capas · avance automático cada 4 s
        </p>
        <div className="infra-rail__controls">
          <button
            type="button"
            className="infra-rail__btn"
            aria-label="Capa anterior"
            onClick={() => scroll(-1)}
          >
            ←
          </button>
          <button
            type="button"
            className="infra-rail__btn"
            aria-label="Capa siguiente"
            onClick={() => scroll(1)}
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={viewportRef}
        className="infra-rail__viewport"
        tabIndex={0}
        role="region"
        aria-label="Capas de infraestructura"
        aria-live="off"
      >
        <ol className="infra-rail__track">
          {layers.map((layer, index) => (
            <InfraLayerCard key={layer.id} layer={layer} step={index + 1} />
          ))}
        </ol>
      </div>
    </div>
  );
}
