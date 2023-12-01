import { useEffect, useState } from 'react';

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(true);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    setMatches(matchMedia.matches);

    matchMedia.addEventListener('change', (e) => setMatches(e.matches));

    return () => matchMedia.removeEventListener('change', (e) => setMatches(e.matches));
  }, [query]);

  return matches;
}

export default useMediaQuery;
