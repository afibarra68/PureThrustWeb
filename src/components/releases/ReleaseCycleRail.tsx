import type { ReleaseTarget } from '../../types/releases.types';
import { useHorizontalCycleRail } from '../../hooks/useHorizontalCycleRail';

function ReleasePhaseCard({
  target,
  step,
}: {
  readonly target: ReleaseTarget;
  readonly step: number;
}) {
  return (
    <li className="release-rail__slide">
      <article className="release-card release-card--phase">
        <header className="release-card__header">
          <div className="release-card__step" aria-hidden="true">
            {String(step).padStart(2, '0')}
          </div>
          <div className="release-card__top">
            <h3 className="release-card__name">{target.name}</h3>
            <p className="release-card__version">Fase {target.version}</p>
          </div>
        </header>
        <p className="release-card__eta">{target.eta}</p>
        <ul className="release-card__highlights">
          {target.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </article>
    </li>
  );
}

type ReleaseCycleRailProps = {
  readonly targets: readonly ReleaseTarget[];
};

export function ReleaseCycleRail({ targets }: ReleaseCycleRailProps) {
  const { viewportRef, scroll, railProps } = useHorizontalCycleRail({
    slideSelector: '.release-rail__slide',
  });

  return (
    <div className="release-rail" {...railProps}>
      <div className="release-rail__toolbar">
        <div className="release-rail__controls">
          <button
            type="button"
            className="release-rail__btn"
            aria-label="Fase anterior"
            onClick={() => scroll(-1)}
          >
            ←
          </button>
          <button
            type="button"
            className="release-rail__btn"
            aria-label="Fase siguiente"
            onClick={() => scroll(1)}
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={viewportRef}
        className="release-rail__viewport"
        tabIndex={0}
        role="region"
        aria-label="Ciclo de release targets"
        aria-live="off"
      >
        <ol className="release-rail__track">
          {targets.map((target) => (
            <ReleasePhaseCard key={target.id} target={target} step={target.order} />
          ))}
        </ol>
      </div>
    </div>
  );
}
