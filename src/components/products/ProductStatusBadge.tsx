import type { ProductStatus } from '../../types/products.types';

const LABELS: Record<ProductStatus, string> = {
  active: 'Activa',
  in_progress: 'En proceso',
  in_execution: 'En ejecución',
  beta: 'Beta',
  planned: 'Planificado',
};

interface ProductStatusBadgeProps {
  readonly status: ProductStatus;
}

export function ProductStatusBadge({ status }: ProductStatusBadgeProps) {
  if (status === 'in_progress') {
    return null;
  }

  return (
    <span className={`product-badge product-badge--${status}`}>{LABELS[status]}</span>
  );
}
