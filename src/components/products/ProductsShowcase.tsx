import { isProductVisible } from '../../config/visibleProducts';
import { useProducts } from '../../hooks/useProducts';
import type { Product } from '../../types/products.types';
import { SectionShell } from '../ui/SectionShell';
import { ProductStatusBadge } from './ProductStatusBadge';
import { ProductLineHeading } from './ProductLineHeading';
import { PRODUCT_BRAND_TITLE } from './productDisplay';

const PRODUCT_ICONS: Record<string, string> = {
  parking: 'P',
  compras: 'C',
  banking: 'G',
  biometrics: 'B',
  publish: 'S',
  video: 'V',
};

const CARD_HIGHLIGHTS_MAX = 3;

function ProductCard({
  product,
  brandTitle,
}: {
  product: Product;
  brandTitle: string;
}) {
  const cardHighlights = product.highlights.slice(0, CARD_HIGHLIGHTS_MAX);

  return (
    <li className="product-card">
      <div className="product-card__icon" aria-hidden="true">
        {PRODUCT_ICONS[product.icon] ?? '•'}
      </div>
      <div className="product-card__head">
        <div className="product-card__badges">
          <ProductStatusBadge status={product.status} />
          <span className="product-card__version">v{product.version}</span>
        </div>
        <ProductLineHeading line={product.name} brandTitle={brandTitle} tagline={product.tagline} />
      </div>
      <ul className="product-card__highlights">
        {cardHighlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <a className="btn btn--ghost product-card__cta" href={product.detailAnchor}>
        Ver producto
      </a>
    </li>
  );
}

export function ProductsShowcase() {
  const state = useProducts();

  return (
    <SectionShell
      id="products"
      title={state.status === 'success' ? state.data.sectionTitle : 'Productos'}
      subtitle={
        state.status === 'success'
          ? state.data.sectionSubtitle
          : 'Líneas de producto PureThrust'
      }
    >
      {state.status === 'loading' ? (
        <p className="state state--loading">Cargando productos…</p>
      ) : null}
      {state.status === 'error' ? (
        <p className="state state--error" role="alert">
          {state.message}
        </p>
      ) : null}
      {state.status === 'success' ? (
        <ul className="product-grid">
          {state.data.products.filter((product) => isProductVisible(product.id)).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              brandTitle={state.data.brandTitle ?? PRODUCT_BRAND_TITLE}
            />
          ))}
        </ul>
      ) : null}
    </SectionShell>
  );
}
