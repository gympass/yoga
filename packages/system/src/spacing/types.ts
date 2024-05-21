import { spacing } from '@gympass/yoga-tokens';

type SpacingValues = typeof spacing | number | string;

type Margin = {
  margin?: SpacingValues;
  m?: SpacingValues;
};

type MarginTop = {
  marginTop?: SpacingValues;
  mt?: SpacingValues;
};

type MarginRight = {
  marginRight?: SpacingValues;
  mr?: SpacingValues;
};

type MarginBottom = {
  marginBottom?: SpacingValues;
  mb?: SpacingValues;
};

type MarginLeft = {
  marginLeft?: SpacingValues;
  ml?: SpacingValues;
};

type MarginHorizontal = {
  marginHorizontal?: SpacingValues;
  mx?: SpacingValues;
  mh?: SpacingValues;
};

type MarginVertical = {
  marginVertical?: SpacingValues;
  my?: SpacingValues;
  mv?: SpacingValues;
};

type Padding = {
  padding?: SpacingValues;
  p?: SpacingValues;
};

type PaddingTop = {
  paddingTop?: SpacingValues;
  pt?: SpacingValues;
};

type PaddingRight = {
  paddingRight?: SpacingValues;
  pr?: SpacingValues;
};

type PaddingBottom = {
  paddingBottom?: SpacingValues;
  pb?: SpacingValues;
};

type PaddingLeft = {
  paddingLeft?: SpacingValues;
  pl?: SpacingValues;
};

type PaddingHorizontal = {
  paddingHorizontal?: SpacingValues;
  px?: SpacingValues;
  ph?: SpacingValues;
};

type PaddingVertical = {
  paddingVertical?: SpacingValues;
  py?: SpacingValues;
  pv?: SpacingValues;
};

type Width = {
  width?: SpacingValues;
  w?: SpacingValues;
};

type MaxWidth = {
  maxWidth?: SpacingValues;
  maxW?: SpacingValues;
};

type MinWidth = {
  minWidth?: SpacingValues;
  minW?: SpacingValues;
};

type Height = {
  height?: SpacingValues;
  h?: SpacingValues;
};

type MaxHeight = {
  maxHeight?: SpacingValues;
  maxH?: SpacingValues;
};

type MinHeight = {
  minHeight?: SpacingValues;
  minH?: SpacingValues;
};

export type Spacing = Margin &
  MarginTop &
  MarginRight &
  MarginBottom &
  MarginLeft &
  MarginHorizontal &
  MarginVertical &
  Padding &
  PaddingTop &
  PaddingRight &
  PaddingBottom &
  PaddingLeft &
  PaddingHorizontal &
  PaddingVertical &
  Width &
  MaxWidth &
  MinWidth &
  Height &
  MaxHeight &
  MinHeight;
