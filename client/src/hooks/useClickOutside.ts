import { useCallback, useEffect, useState } from 'react';

function useClickOutside(handler: () => void) {
  const [node, setNode] = useState<HTMLElement | null>(null);

  const ref = useCallback((node: HTMLElement | null) => {
    setNode(node);
  }, []);

  const handleClick = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (node && !node.contains(e.target as HTMLElement)) {
        handler();
      }
    },
    [handler, node]
  );

  useEffect(() => {
    document.addEventListener('click', handleClick, true);
    document.addEventListener('touchstart', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
      document.removeEventListener('touchstart', handleClick, true);
    };
  }, [handleClick]);

  return ref;
}

export default useClickOutside;
