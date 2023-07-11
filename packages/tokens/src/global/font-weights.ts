export interface FontWeightsProps extends Array<number> {
  light?: number;
  regular?: number;
  medium?: number;
  bold?: number;
  black?: number;
}

const fontWeights: FontWeightsProps = [300, 400, 500, 700, 900];

[
  fontWeights.light,
  fontWeights.regular,
  fontWeights.medium,
  fontWeights.bold,
  fontWeights.black,
] = fontWeights;

export default fontWeights;
