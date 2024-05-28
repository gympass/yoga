import { elevations } from '@gympass/yoga-tokens';

type ElevationsValues = typeof elevations | string;

export type Elevations = {
  boxShadow?: ElevationsValues;
  bs?: ElevationsValues;
  elevation?: ElevationsValues;
};
