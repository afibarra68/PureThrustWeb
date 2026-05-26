import { useMemo } from 'react';
import { getProducts } from '../services/api';
import { useAsyncData } from './useAsyncData';

export function useProducts() {
  const loader = useMemo(() => () => getProducts(), []);
  return useAsyncData(loader);
}
