import type { ProductArchitecture } from '../../types/products.types';

interface ProductSimpleArchitectureProps {
  readonly architecture: ProductArchitecture;
}

export function ProductSimpleArchitecture({ architecture }: ProductSimpleArchitectureProps) {
  return (
    <section className="product-arch" aria-labelledby="product-arch-title">
      <header className="product-arch__head">
        <h3 id="product-arch-title" className="product-arch__title">
          {architecture.title}
        </h3>
        {architecture.subtitle ? (
          <p className="product-arch__subtitle">{architecture.subtitle}</p>
        ) : null}
      </header>
      <div className="product-arch__flow">
        {architecture.layers.map((layer, index) => (
          <div key={layer.id} className="product-arch__layer">
            <span className="infra-layer__label">{layer.label}</span>
            <article className="infra-node product-arch__node" data-layer={layer.id}>
              <div>
                <h4 className="infra-node__name">{layer.name}</h4>
                <p className="infra-node__tech">{layer.summary}</p>
              </div>
            </article>
            {index < architecture.layers.length - 1 ? (
              <div className="infra-connector" aria-hidden="true" />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
