import { useEffect, useRef, useState, type CSSProperties } from 'react';
import type { InfraLayer } from '../../types/infrastructure.types';
import { pickOrbitNodes } from './orbitNodes';

const SPIN_DURATION_S = 48;
/** Radios en viewBox 0–100 (alineados con CSS de órbita y hub) */
const ORBIT_VIEW_R = 36;
const HUB_VIEW_R = 11;
const NODE_VIEW_HALF = 9;

function connectorSegment(angleDeg: number): {
  readonly x1: number;
  readonly y1: number;
  readonly x2: number;
  readonly y2: number;
} {
  const rad = (angleDeg * Math.PI) / 180;
  const sin = Math.sin(rad);
  const cos = Math.cos(rad);
  const endLen = ORBIT_VIEW_R - NODE_VIEW_HALF;

  return {
    x1: 50 + HUB_VIEW_R * sin,
    y1: 50 - HUB_VIEW_R * cos,
    x2: 50 + endLen * sin,
    y2: 50 - endLen * cos,
  };
}

type ArchitectureOrbitProps = {
  readonly layers: readonly InfraLayer[];
};

export function ArchitectureOrbit({ layers }: ArchitectureOrbitProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const nodes = pickOrbitNodes(layers);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReducedMotion(media.matches);
    apply();
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || reducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSpinning(entry?.isIntersecting ?? false);
      },
      { threshold: 0.3, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(stage);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const spinActive = isSpinning && !reducedMotion;

  return (
    <div className="arch-orbit">
      <div
        ref={stageRef}
        className="arch-orbit__stage"
        style={{ '--arch-spin-duration': `${SPIN_DURATION_S}s` } as CSSProperties}
        aria-label="Arquitectura ThrustPure — capas técnicas"
      >
        <div className="arch-orbit__hub">
          <span className="arch-orbit__hub-line">ARQUITECTURA</span>
          <span className="arch-orbit__hub-line arch-orbit__hub-line--brand">
            THRUSTPURE
          </span>
        </div>

        <div
          className={`arch-orbit__ring${spinActive ? ' arch-orbit__ring--spin' : ''}`}
          aria-hidden="true"
        />

        <ul
          className={`arch-orbit__orbit-list${spinActive ? ' arch-orbit__orbit-list--spin' : ''}`}
        >
          <svg
            className="arch-orbit__connectors"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            {nodes.map((node) => {
              const segment = connectorSegment(node.angleDeg);
              return (
                <line
                  key={`connector-${node.id}`}
                  className="arch-orbit__connector"
                  x1={segment.x1}
                  y1={segment.y1}
                  x2={segment.x2}
                  y2={segment.y2}
                />
              );
            })}
          </svg>
          {nodes.map((node) => (
            <li
              key={node.id}
              className="arch-orbit__node"
              style={{ '--orbit-angle': `${node.angleDeg}deg` } as CSSProperties}
            >
              <button
                type="button"
                className={`arch-orbit__node-disc${spinActive ? ' arch-orbit__node-disc--counter' : ''}`}
                title={`${node.name} — ${node.tech}`}
              >
                <span className="arch-orbit__node-glyph" aria-hidden="true">
                  {node.glyph}
                </span>
                <span className="arch-orbit__node-name">{node.name}</span>
                <span className="arch-orbit__node-tech">{node.tech}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
