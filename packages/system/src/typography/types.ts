import { colors, fontSizes, lineHeights } from '@gympass/yoga-tokens';

type ColorsValues = typeof colors | string;
type FontSizesValues = typeof fontSizes | string | number;
type LineHeightsValues = typeof lineHeights | string | number;
type TextAlignValues = string;
type TextTransformValues = string;

type Color = {
  color?: ColorsValues;
  c?: ColorsValues;
};

type FontSize = {
  fontSize?: FontSizesValues;
  fs?: FontSizesValues;
};

type LineHeight = {
  lineHeight?: LineHeightsValues;
  lh?: LineHeightsValues;
};

type TextAlign = {
  textAlign?: TextAlignValues;
  ta?: TextAlignValues;
};

type TextTransform = {
  textTransform?: TextTransformValues;
  tt?: TextTransformValues;
};

export type Typography = Color & FontSize & LineHeight & TextAlign & TextTransform;
