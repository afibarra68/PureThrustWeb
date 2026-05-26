export interface BankingServiceItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

export interface BankingServices {
  readonly title: string;
  readonly subtitle?: string;
  readonly items: readonly BankingServiceItem[];
}

export interface BankingPayload {
  readonly platformName: string;
  readonly tagline: string;
  readonly status: import('./products.types').ProductStatus;
  readonly version: string;
  readonly services: BankingServices;
  readonly integrations: readonly string[];
}
