export type ProductStatus =
  | 'active'
  | 'in_progress'
  | 'in_execution'
  | 'beta'
  | 'planned';

export interface ProductLink {
  readonly label: string;
  readonly url: string;
  readonly variant?: 'primary' | 'ghost';
}

export interface ProductIntegration {
  readonly name: string;
  readonly description?: string;
  readonly website: ProductLink;
  readonly clientLogin?: ProductLink;
}

export interface ProductFeatureGroup {
  readonly title: string;
  readonly items: readonly string[];
}

export interface ProductArchitectureLayer {
  readonly id: string;
  readonly label: string;
  readonly name: string;
  readonly summary: string;
}

export interface ProductArchitecture {
  readonly title: string;
  readonly subtitle?: string;
  readonly principles: readonly string[];
  readonly layers: readonly ProductArchitectureLayer[];
}

export interface Product {
  readonly id: string;
  readonly name: string;
  readonly tagline: string;
  readonly status: ProductStatus;
  readonly version: string;
  readonly icon: string;
  readonly detailAnchor: string;
  readonly highlights: readonly string[];
  readonly description?: string;
  readonly featureGroups?: readonly ProductFeatureGroup[];
  readonly architecture?: ProductArchitecture;
  readonly integration?: ProductIntegration;
}

export interface ProductsPayload {
  readonly sectionTitle: string;
  readonly sectionSubtitle: string;
  readonly brandTitle: string;
  readonly products: readonly Product[];
}
