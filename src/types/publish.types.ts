export interface PublishChannel {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

export interface PublishCapability {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

export interface PublishPayload {
  readonly platformName: string;
  readonly tagline: string;
  readonly status: import('./products.types').ProductStatus;
  readonly version: string;
  readonly channels: readonly PublishChannel[];
  readonly capabilities: readonly PublishCapability[];
  readonly integrations?: readonly string[];
}
