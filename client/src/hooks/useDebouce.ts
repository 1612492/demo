import { useEffect, useState } from 'react';

const DELAY = 500;

function useDebounce<T>(value: T, callback: (value: T) => void) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), DELAY);

    return () => clearTimeout(timer);
  }, [value]);

  useEffect(() => {
    callback(debouncedValue);
  }, [debouncedValue]);
}

export default useDebounce;
