/** Título de marca compartido por todas las líneas de producto. */
export const PRODUCT_BRAND_TITLE = 'purethrust';

/** Primera letra en mayúscula para nombres de línea (parking → Parking). */
export function formatProductLine(line: string): string {
  if (!line) return line;
  return line.charAt(0).toUpperCase() + line.slice(1);
}
