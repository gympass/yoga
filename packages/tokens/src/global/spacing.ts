export interface ISpacingProps extends Array<number> {
  zero?: number;
  xxxsmall?: number;
  xxsmall?: number;
  xsmall?: number;
  small?: number;
  medium?: number;
  large?: number;
  xlarge?: number;
  xxlarge?: number;
  xxxlarge?: number;
  huge?: number;
  xhuge?: number;
}

const spacing: ISpacingProps = [0, 4, 8, 12, 16, 20, 24, 32, 40, 56, 72, 80];

[
  spacing.zero,
  spacing.xxxsmall,
  spacing.xxsmall,
  spacing.xsmall,
  spacing.small,
  spacing.medium,
  spacing.large,
  spacing.xlarge,
  spacing.xxlarge,
  spacing.xxxlarge,
  spacing.huge,
  spacing.xhuge,
] = spacing;

export default spacing;
