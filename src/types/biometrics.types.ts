export type BiometricModality = 'face' | 'fingerprint' | 'voice' | 'liveness';

export interface BiometricCapability {
  readonly id: string;
  readonly modality: BiometricModality;
  readonly title: string;
  readonly description: string;
}

export interface BiometricFlowStep {
  readonly id: string;
  readonly order: number;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export interface BiometricExecutionItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

export interface BiometricExecutionStack {
  readonly title: string;
  readonly subtitle?: string;
  readonly items: readonly BiometricExecutionItem[];
}

export interface BiometricsPayload {
  readonly platformName: string;
  readonly tagline: string;
  readonly status: import('./products.types').ProductStatus;
  readonly version: string;
  readonly capabilities: readonly BiometricCapability[];
  readonly flow: readonly BiometricFlowStep[];
  readonly executionStack?: BiometricExecutionStack;
  readonly integrations: readonly string[];
}
