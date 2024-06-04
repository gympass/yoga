import { colors, fontSizes, lineHeights } from '@gympass/yoga-tokens';

type ColorsValues = typeof colors | string;
type FontSizesValues = typeof fontSizes | string | number;
type LineHeightsValues = typeof lineHeights | string | number;
type TextAlignValues = string;

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

export type Typography = Color & FontSize & LineHeight & TextAlign;
