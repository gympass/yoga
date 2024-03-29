import { elevate } from '@gympass/yoga-common';
import colors from './colors';

const [zero, small, medium, large] = elevate({ color: colors.medium });

const elevations = {
  zero,
  small,
  medium,
  large,
};

export default elevations;
