export interface InfraNode {
  readonly id: string;
  readonly name: string;
  readonly tech: string;
  readonly icon: string;
}

export interface InfraLayer {
  readonly id: string;
  readonly label: string;
  readonly nodes: readonly InfraNode[];
}

export interface InfrastructurePayload {
  readonly title: string;
  readonly subtitle: string;
  readonly layers: readonly InfraLayer[];
  readonly connections: readonly (readonly [string, string])[];
}
