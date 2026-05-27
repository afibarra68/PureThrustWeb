export type ReleaseStatus = 'planned' | 'in_progress' | 'shipped';

export interface ReleaseTarget {
  readonly id: string;
  readonly order: number;
  readonly name: string;
  readonly version: string;
  readonly status: ReleaseStatus;
  readonly eta: string;
  readonly highlights: readonly string[];
}

export interface ReleasesPayload {
  readonly brand: string;
  readonly domain: string;
  readonly targets: readonly ReleaseTarget[];
}
