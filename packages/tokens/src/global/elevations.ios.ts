import { elevate } from '@gympass/yoga-common';
import colors from './colors';

const elevateOptions = {
  color: colors.medium,
  depth: 1,
  spread: false,
  fallback: true,
};

const [zero, small, medium, large] =
  elevate(elevateOptions) as [string, string, string, string];

const elevations = {
  zero,
  small,
  medium,
  large,
};

export default elevations;
