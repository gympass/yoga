export interface FontSizes extends Array<number> {
  xxsmall?: number;
  xsmall?: number;
  small?: number;
  medium?: number;
  large?: number;
  xlarge?: number;
  xxlarge?: number;
  xxxlarge?: number;
  huge?: number;
}

const fontSizes: FontSizes  = [10, 12, 14, 16, 20, 24, 32, 40, 48];

[
  fontSizes.xxsmall,
  fontSizes.xsmall,
  fontSizes.small,
  fontSizes.medium,
  fontSizes.large,
  fontSizes.xlarge,
  fontSizes.xxlarge,
  fontSizes.xxxlarge,
  fontSizes.huge,
] = fontSizes;

export default fontSizes;
