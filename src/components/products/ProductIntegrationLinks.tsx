import type { ProductIntegration } from '../../types/products.types';

interface ProductIntegrationLinksProps {
  readonly integration: ProductIntegration;
}

export function ProductIntegrationLinks({ integration }: ProductIntegrationLinksProps) {
  const links = [integration.website, integration.clientLogin].filter(
    (link): link is NonNullable<typeof link> => link != null,
  );

  return (
    <div className="product-integration product-integration--detail">
      <p className="product-integration__label">
        <span className="product-integration__name">{integration.name}</span>
        {integration.description ? (
          <span className="product-integration__desc"> — {integration.description}</span>
        ) : null}
      </p>
      <div className="product-integration__actions">
        {links.map((link) => (
          <a
            key={link.url}
            className={`btn btn--${link.variant ?? 'ghost'}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
