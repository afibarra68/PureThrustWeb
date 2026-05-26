import { useEffect, useState } from 'react';
import type { FetchState } from '../services/api';

export function useAsyncData<T>(loader: () => Promise<T>): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({ status: 'idle' });

  useEffect(() => {
    let cancelled = false;
    setState({ status: 'loading' });

    loader()
      .then((data) => {
        if (!cancelled) setState({ status: 'success', data });
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          const message = err instanceof Error ? err.message : 'Error desconocido';
          setState({ status: 'error', message });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [loader]);

  return state;
}
