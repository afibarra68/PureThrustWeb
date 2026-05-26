import { useMemo } from 'react';
import { getBiometrics } from '../services/api';
import { useAsyncData } from './useAsyncData';

export function useBiometrics() {
  const loader = useMemo(() => () => getBiometrics(), []);
  return useAsyncData(loader);
}
