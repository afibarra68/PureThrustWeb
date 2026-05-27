import { isProductVisible } from '../../config/visibleProducts';
import { useProducts } from '../../hooks/useProducts';
import type { Product } from '../../types/products.types';
import { SectionShell } from '../ui/SectionShell';
import { ProductFeatureGroups } from './ProductFeatureGroups';
import { ProductSimpleArchitecture } from './ProductSimpleArchitecture';
import { ProductBiometricsDetail } from './ProductBiometricsDetail';
import { ProductComprasDetail } from './ProductComprasDetail';
import { ProductPublishDetail } from './ProductPublishDetail';
import { ProductBankingDetail } from './ProductBankingDetail';
import { ProductIntegrationLinks } from './ProductIntegrationLinks';
import { ProductStatusBadge } from './ProductStatusBadge';
import { formatProductLine } from './productDisplay';

interface ProductSpotlightProps {
  readonly productId: string;
}

function ProductSpotlightTitle({ line, tagline }: { line: string; tagline: string }) {
  return (
    <>
      <span className="product-spotlight-title__line">{formatProductLine(line)}</span>
      <span className="product-spotlight-title__sep"> — </span>
      <span className="product-spotlight-title__tagline">{tagline}</span>
    </>
  );
}

function SpotlightContent({ product }: { product: Product }) {
  const sectionId = product.detailAnchor.replace('#', '');

  return (
    <SectionShell
      id={sectionId}
      titleNode={<ProductSpotlightTitle line={product.name} tagline={product.tagline} />}
    >
      <article className="product-spotlight">
        <div className="product-spotlight__meta">
          <ProductStatusBadge status={product.status} />
          <span className="product-card__version">v{product.version}</span>
        </div>
        {product.description ? (
          <p className="product-spotlight__desc">{product.description}</p>
        ) : null}
        {product.integration ? (
          <ProductIntegrationLinks integration={product.integration} />
        ) : null}
        {product.architecture &&
        product.id !== 'compras' &&
        product.id !== 'publish' ? (
          <ProductSimpleArchitecture architecture={product.architecture} />
        ) : null}
        {product.id === 'compras' ? <ProductComprasDetail /> : null}
        {product.id === 'biometrics' ? <ProductBiometricsDetail /> : null}
        {product.id === 'publish' ? <ProductPublishDetail /> : null}
        {product.id === 'banking' ? <ProductBankingDetail /> : null}
        {product.featureGroups ? (
          <ProductFeatureGroups groups={product.featureGroups} />
        ) : product.id !== 'biometrics' &&
          product.id !== 'compras' &&
          product.id !== 'publish' &&
          product.id !== 'banking' ? (
          <ul className="product-card__highlights">
            {product.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        ) : null}
      </article>
    </SectionShell>
  );
}

export function ProductSpotlight({ productId }: ProductSpotlightProps) {
  const state = useProducts();

  if (!isProductVisible(productId)) return null;

  if (state.status !== 'success') return null;

  const product = state.data.products.find((p) => p.id === productId);
  if (!product) return null;

  return <SpotlightContent product={product} />;
}
