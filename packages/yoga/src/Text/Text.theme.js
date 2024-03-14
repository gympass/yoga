const Text = ({ fontSizes, lineHeights, fontWeights }) => ({
  display1: {
    fontFamily: 'NaN Holo Condensed',
    fontsize: fontSizes.xhuge,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.xhuge,
  },
  display2: {
    fontFamily: 'NaN Holo Condensed',
    fontsize: fontSizes.xxxlarge,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.xxlarge,
  },
  display3: {
    fontFamily: 'NaN Holo Condensed',
    fontsize: fontSizes.xxlarge,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.xlarge,
  },
  display4: {
    fontFamily: 'NaN Holo Condensed',
    fontsize: fontSizes.xlarge,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.medium,
  },
  displayNumber: {
    fontFamily: 'NaN Holo Condensed',
    fontsize: fontSizes.xxxlarge,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.xxlarge,
  },
  h1: {
    fontsize: fontSizes.huge,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.huge,
  },
  'h1-light': {
    fontWeight: fontWeights.light,
  },
  h2: {
    fontsize: fontSizes.xxxlarge,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.xxxlarge,
  },
  'h2-light': {
    fontWeight: fontWeights.light,
  },
  h3: {
    fontsize: fontSizes.xxlarge,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.xxlarge,
  },
  'h3-light': {
    fontWeight: fontWeights.light,
  },
  h4: {
    fontsize: fontSizes.xlarge,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.xlarge,
  },
  'h4-light': {
    fontWeight: fontWeights.light,
  },
  h5: {
    fontsize: fontSizes.large,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.large,
  },
  'h5-light': {
    fontWeight: fontWeights.light,
  },
  body1: {
    fontsize: fontSizes.medium,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.medium,
  },
  'body1-bold': {
    fontWeight: fontWeights.medium,
  },
  body2: {
    fontsize: fontSizes.small,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.small,
  },
  'body2-bold': {
    fontWeight: fontWeights.medium,
  },
  caption: {
    fontsize: fontSizes.xsmall,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.xsmall,
  },
  overline: {
    fontsize: fontSizes.xsmall,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.xsmall,
  },
  sectionTitle: {
    fontsize: fontSizes.xsmall,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.xsmall,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  smallestException: {
    fontsize: fontSizes.xxsmall,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.xxsmall,
  },

  // deprecated, please don't use
  p: {
    fontsize: fontSizes.medium,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.medium,
  },
  'p-light': {
    fontWeight: fontWeights.light,
  },
  'p-bold': {
    fontWeight: fontWeights.medium,
  },
  small: {
    fontsize: fontSizes.small,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.small,
  },
  'small-light': {
    fontWeight: fontWeights.light,
  },
  'small-bold': {
    fontWeight: fontWeights.medium,
  },
  tiny: {
    fontsize: fontSizes.xsmall,
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights.xsmall,
  },
  'tiny-light': {
    fontWeight: fontWeights.light,
  },
  'tiny-bold': {
    fontWeight: fontWeights.medium,
  },
  light: {
    fontWeight: fontWeights.light,
  },
  regular: {
    fontWeight: fontWeights.regular,
  },
  medium: {
    fontWeight: fontWeights.medium,
  },
  bold: {
    fontWeight: fontWeights.bold,
  },
  black: {
    fontWeight: fontWeights.black,
  },
});

export default Text;
