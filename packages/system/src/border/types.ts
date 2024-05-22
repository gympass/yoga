import { borders, colors, radii } from '@gympass/yoga-tokens';

type BorderValues = typeof borders | number | string;
type BorderColorsValues = typeof colors | string;
type BorderRadiusValues = typeof radii | number | string;

type Border = {
  border?: BorderValues;
  b?: BorderValues;
};

type BorderTop = {
  borderTop?: BorderValues;
  bt?: BorderValues;
};

type BorderRight = {
  borderRight?: BorderValues;
  br?: BorderValues;
};

type BorderBottom = {
  borderBottom?: BorderValues;
  bb?: BorderValues;
};

type BorderLeft = {
  borderLeft?: BorderValues;
  bl?: BorderValues;
};

type BorderColor = {
  borderColor?: BorderColorsValues;
  bc?: BorderColorsValues;
};

type BorderTopColor = {
  borderTopColor?: BorderColorsValues;
  btc?: BorderColorsValues;
};

type BorderRightColor = {
  borderRightColor?: BorderColorsValues;
  brc?: BorderColorsValues;
};

type BorderBottomColor = {
  borderBottomColor?: BorderColorsValues;
  bbc?: BorderColorsValues;
};

type BorderLeftColor = {
  borderLeftColor?: BorderColorsValues;
  blc?: BorderColorsValues;
};

type BorderWidth = {
  borderWidth?: BorderValues;
  bw?: BorderValues;
};

type BorderTopWidth = {
  borderTopWidth?: BorderValues;
  btw?: BorderValues;
};

type BorderRightWidth = {
  borderRightWidth?: BorderValues;
  brw?: BorderValues;
};

type BorderBottomWidth = {
  borderBottomWidth?: BorderValues;
  bbw?: BorderValues;
};

type BorderLeftWidth = {
  borderLeftWidth?: BorderValues;
  blw?: BorderValues;
};

type BorderRadius = {
  borderRadius?: BorderRadiusValues;
  bRadius?: BorderRadiusValues;
};

type BorderTopLeftRadius = {
  borderTopLeftRadius?: BorderRadiusValues;
  btlr?: BorderRadiusValues;
};

type BorderTopRightRadius = {
  borderTopRightRadius?: BorderRadiusValues;
  btrr?: BorderRadiusValues;
};

type BorderBottomLeftRadius = {
  borderBottomLeftRadius?: BorderRadiusValues;
  bblr?: BorderRadiusValues;
};

type BorderBottomRightRadius = {
  borderBottomRightRadius?: BorderRadiusValues;
  bbrr?: BorderRadiusValues;
};

export type Borders = {
  borderStyle?: string;
} & Border &
  BorderTop &
  BorderRight &
  BorderBottom &
  BorderLeft &
  BorderColor &
  BorderTopColor &
  BorderRightColor &
  BorderBottomColor &
  BorderLeftColor &
  BorderWidth &
  BorderTopWidth &
  BorderRightWidth &
  BorderBottomWidth &
  BorderLeftWidth &
  BorderRadius &
  BorderTopLeftRadius &
  BorderTopRightRadius &
  BorderBottomLeftRadius &
  BorderBottomRightRadius;
