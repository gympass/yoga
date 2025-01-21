import { useRef } from 'react';

/**
 * A helper that returns a stable id for React components.
 * @returns string
 */
export const useId = () => {
  return useRef(Math.random().toString(36).substr(2, 9)).current;
};
