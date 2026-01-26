/**
 * useApi Hook
 * Custom hook for making API calls with loading and error states
 * Encapsulates common API call patterns
 */

import { useState, useCallback } from 'react';
import { api, ApiError } from '../services/api';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
}

interface UseApiReturn<T> extends UseApiState<T> {
  execute: (...args: any[]) => Promise<T | undefined>;
  reset: () => void;
}

/**
 * Hook for making API calls with automatic state management
 */
export const useApi = <T = any>(
  apiCall: (...args: any[]) => Promise<T>
): UseApiReturn<T> => {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (...args: any[]) => {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      try {
        const data = await apiCall(...args);
        setState({ data, loading: false, error: null });
        return data;
      } catch (error) {
        const apiError = error as ApiError;
        setState({
          data: null,
          loading: false,
          error: apiError,
        });
        return undefined;
      }
    },
    [apiCall]
  );

  const reset = useCallback(() => {
    setState({
      data: null,
      loading: false,
      error: null,
    });
  }, []);

  return {
    ...state,
    execute,
    reset,
  };
};

