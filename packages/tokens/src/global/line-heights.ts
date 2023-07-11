export interface LineHeightProps extends Array<number> {
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

const lineHeight: LineHeightProps = [12, 16, 20, 24, 28, 32, 40, 48, 56];

[
  lineHeight.xxsmall,
  lineHeight.xsmall,
  lineHeight.small,
  lineHeight.medium,
  lineHeight.large,
  lineHeight.xlarge,
  lineHeight.xxlarge,
  lineHeight.xxxlarge,
  lineHeight.huge,
] = lineHeight;

export default lineHeight;
