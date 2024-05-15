import tokens from '@gympass/yoga-tokens';

type ColorsValues = typeof tokens.colors | string;

export type Colors = {
  backgroundColor?: ColorsValues;
  bg?: ColorsValues;
  bgColor?: ColorsValues;
};