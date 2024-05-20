import { fontWeights } from '@gympass/yoga-tokens';

type FontWeightsValues = typeof fontWeights | string | number;

export type FontWeights = {
  fontWeight?: FontWeightsValues;
  fw?: FontWeightsValues;
};
