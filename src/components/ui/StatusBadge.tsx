import type { ReleaseStatus } from '../../types/releases.types';

const LABELS: Record<ReleaseStatus, string> = {
  planned: 'Planificado',
  in_progress: 'En curso',
  shipped: 'Publicado',
};

interface StatusBadgeProps {
  readonly status: ReleaseStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`badge badge--${status}`} data-status={status}>
      {LABELS[status]}
    </span>
  );
}
