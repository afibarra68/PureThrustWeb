import { useMemo } from 'react';
import { getBanking } from '../services/api';
import { useAsyncData } from './useAsyncData';

export function useBanking() {
  const loader = useMemo(() => () => getBanking(), []);
  return useAsyncData(loader);
}
