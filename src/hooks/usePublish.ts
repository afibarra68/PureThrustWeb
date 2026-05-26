import { useMemo } from 'react';
import { getPublish } from '../services/api';
import { useAsyncData } from './useAsyncData';

export function usePublish() {
  const loader = useMemo(() => () => getPublish(), []);
  return useAsyncData(loader);
}
