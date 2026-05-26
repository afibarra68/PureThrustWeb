const API_BASE = import.meta.env.VITE_API_BASE ?? '';

export type FetchState<T> =
  | { readonly status: 'idle' }
  | { readonly status: 'loading' }
  | { readonly status: 'success'; readonly data: T }
  | { readonly status: 'error'; readonly message: string };

export async function fetchApi<T>(path: string): Promise<T> {
  const url = `${API_BASE}${path}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API ${path}: HTTP ${response.status}`);
  }
  return response.json() as Promise<T>;
}

export function getReleases() {
  return fetchApi<import('../types/releases.types').ReleasesPayload>('/api/releases.json');
}

export function getInfrastructure() {
  return fetchApi<import('../types/infrastructure.types').InfrastructurePayload>(
    '/api/infrastructure.json',
  );
}

export function getBiometrics() {
  return fetchApi<import('../types/biometrics.types').BiometricsPayload>(
    '/api/biometrics.json',
  );
}

export function getCompras() {
  return fetchApi<import('../types/compras.types').ComprasPayload>('/api/compras.json');
}

export function getPublish() {
  return fetchApi<import('../types/publish.types').PublishPayload>('/api/publish.json');
}

export function getBanking() {
  return fetchApi<import('../types/banking.types').BankingPayload>('/api/banking.json');
}

export function getProducts() {
  return fetchApi<import('../types/products.types').ProductsPayload>(
    '/api/products.json',
  );
}
