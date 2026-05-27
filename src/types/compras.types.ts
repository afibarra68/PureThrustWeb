export interface ComprasExecutionItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

export interface ComprasExecutionStack {
  readonly title: string;
  readonly subtitle?: string;
  readonly items: readonly ComprasExecutionItem[];
}

export interface ComprasPayload {
  readonly platformName: string;
  readonly tagline: string;
  readonly status: import('./products.types').ProductStatus;
  readonly version: string;
  readonly executionStack: ComprasExecutionStack;
  readonly integrations?: readonly string[];
}
