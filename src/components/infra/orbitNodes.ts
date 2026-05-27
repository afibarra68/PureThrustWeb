import type { InfraLayer, InfraNode } from '../../types/infrastructure.types';

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

export type OrbitNode = InfraNode & {
  readonly glyph: string;
  readonly angleDeg: number;
};

export function pickOrbitNodes(layers: readonly InfraLayer[], count = 8): OrbitNode[] {
  const flat = layers.flatMap((layer) => layer.nodes);
  const selected = flat.slice(0, count);

  return selected.map((node, index) => ({
    ...node,
    glyph: ICON_GLYPH[node.icon] ?? '•',
    angleDeg: (360 / count) * index,
  }));
}
