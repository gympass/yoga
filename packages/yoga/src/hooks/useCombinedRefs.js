import { useEffect, useRef } from 'react';

/**
 *  A hook for combining multiple refs into one ref.
 */

export const useCombinedRefs = (...refs) => {
  const targetRef = useRef(null);

  useEffect(() => {
    for (let i = 0; i < refs.length; i++) {
      const ref = refs[i];

      if (!ref) return;

      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    }
  }, [refs]);

  return targetRef;
};
