import type { ProductFeatureGroup } from '../../types/products.types';

interface ProductFeatureGroupsProps {
  readonly groups: readonly ProductFeatureGroup[];
}

export function ProductFeatureGroups({ groups }: ProductFeatureGroupsProps) {
  return (
    <div className="product-features">
      {groups.map((group) => (
        <section key={group.title} className="product-features__group">
          <h3 className="product-features__title">{group.title}</h3>
          <ul className="product-card__highlights">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
