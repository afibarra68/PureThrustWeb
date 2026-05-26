import { formatProductLine, PRODUCT_BRAND_TITLE } from './productDisplay';

interface ProductLineHeadingProps {
  readonly line: string;
  readonly brandTitle?: string;
  readonly tagline?: string;
}

export function ProductLineHeading({
  line,
  brandTitle = PRODUCT_BRAND_TITLE,
  tagline,
}: ProductLineHeadingProps) {
  return (
    <div className="product-line-heading product-line-heading--card">
      <p className="product-line-heading__brand">{brandTitle}</p>
      <h3 className="product-line-heading__line">{formatProductLine(line)}</h3>
      {tagline ? <p className="product-card__tagline">{tagline}</p> : null}
    </div>
  );
}
