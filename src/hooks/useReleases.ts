import { useMemo } from 'react';
import { getReleases } from '../services/api';
import { useAsyncData } from './useAsyncData';

export function useReleases() {
  const loader = useMemo(() => () => getReleases(), []);
  return useAsyncData(loader);
}
