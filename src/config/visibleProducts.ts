/** Productos ocultos en la UI (datos en API se mantienen). */
export const HIDDEN_PRODUCT_IDS = new Set<string>(['compras', 'video']);

export function isProductVisible(productId: string): boolean {
  return !HIDDEN_PRODUCT_IDS.has(productId);
}
