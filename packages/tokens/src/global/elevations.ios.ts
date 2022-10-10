import { elevate } from '@gympass/yoga-common';
import { colors } from './colors';

const [zero, small, medium, large] = elevate({
  color: colors.medium,
  depth: 1,
  spread: false,
  fallback: true,
});

export const elevations = {
  zero,
  small,
  medium,
  large,
} as const;
