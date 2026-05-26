import { useMemo } from 'react';
import { getCompras } from '../services/api';
import { useAsyncData } from './useAsyncData';

export function useCompras() {
  const loader = useMemo(() => () => getCompras(), []);
  return useAsyncData(loader);
}
