import { colors } from '@gympass/yoga-tokens';

type ColorsValues = typeof colors | string;

export type Colors = {
  backgroundColor?: ColorsValues;
  bg?: ColorsValues;
  bgColor?: ColorsValues;
};