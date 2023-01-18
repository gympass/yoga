/**
 * @module spacing
 * @desc Spacing tokens module.
 *
 * @memberof @gympass/yoga-tokens
 */

/**
 * A spacing
 * @typedef Spacing
 *
 * @type {Object}
 * @property {number} zero - 0
 * @property {number} xxxsmall - 4
 * @property {number} xxsmall - 8
 * @property {number} xsmall - 12
 * @property {number} small - 16
 * @property {number} medium - 20
 * @property {number} large - 24
 * @property {number} xlarge - 32
 * @property {number} xxlarge - 40
 * @property {number} xxxlarge - 56
 * @property {number} huge - 72
 * @property {number} xhuge - 80
 */

/**
 * @type {Spacing}
 * @default
 */

 interface spacingProps extends Array<number> {
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

const spacing: spacingProps = [0, 4, 8, 12, 16, 20, 24, 32, 40, 56, 72, 80];

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
