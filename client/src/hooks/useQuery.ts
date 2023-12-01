import { useState, useEffect, useCallback, useRef } from 'react';
import { Query } from '../types';
import queryString from 'query-string';
import { defaultFilters, filterToField } from '@utils/filter';

function useQuery<Data>(url: string) {
  const params = useRef<Partial<Query>>(filterToField(defaultFilters));
  const [data, setData] = useState<Data>();
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(
    async (newParams?: Partial<Query>) => {
      const mergedParams = { ...params.current, ...newParams };
      params.current = mergedParams;

      const query = queryString.stringify(mergedParams);

      try {
        const response = await fetch(`${url}?${query}`);
        if (!response.ok) {
          throw new Error(`Request failed with status code: ${response.status}`);
        }

        const { data } = await response.json();
        setData(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    },
    [url]
  );

  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  return { data, error, isLoading, refetch: fetchData };
}

export default useQuery;
