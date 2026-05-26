import { useMemo } from 'react';
import { getInfrastructure } from '../services/api';
import { useAsyncData } from './useAsyncData';

export function useInfrastructure() {
  const loader = useMemo(() => () => getInfrastructure(), []);
  return useAsyncData(loader);
}
