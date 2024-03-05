const Text = ({ fontSizes, lineHeights, fontWeights }) => ({
  display1: {
    fontFamily: 'NaN Holo Condensed',
    fontsize: fontSizes.xhuge,
    lineHeight: lineHeights.xhuge,
    fontWeight: fontWeights.bold,
  },
  display2: {
    fontFamily: 'NaN Holo Condensed',
    fontsize: fontSizes.xxxlarge,
    lineHeight: lineHeights.xxlarge,
    fontWeight: fontWeights.bold,
  },
  display3: {
    fontFamily: 'NaN Holo Condensed',
    fontsize: fontSizes.xxlarge,
    lineHeight: lineHeights.xlarge,
    fontWeight: fontWeights.bold,
  },
  display4: {
    fontFamily: 'NaN Holo Condensed',
    fontsize: fontSizes.xlarge,
    lineHeight: lineHeights.medium,
    fontWeight: fontWeights.bold,
  },
  displayNumber: {
    fontFamily: 'NaN Holo Condensed',
    fontsize: fontSizes.xxxlarge,
    lineHeight: lineHeights.xxlarge,
    fontWeight: fontWeights.bold,
  },
  h1: {
    fontsize: fontSizes.huge,
    lineHeight: lineHeights.huge,
    fontWeight: fontWeights.medium,
  },
  h2: {
    fontsize: fontSizes.xxxlarge,
    lineHeight: lineHeights.xxxlarge,
    fontWeight: fontWeights.medium,
  },
  h3: {
    fontsize: fontSizes.xxlarge,
    lineHeight: lineHeights.xxlarge,
    fontWeight: fontWeights.medium,
  },
  h4: {
    fontsize: fontSizes.xlarge,
    lineHeight: lineHeights.xlarge,
    fontWeight: fontWeights.medium,
  },
  h5: {
    fontsize: fontSizes.large,
    lineHeight: lineHeights.large,
    fontWeight: fontWeights.medium,
  },
  p: {
    fontsize: fontSizes.medium,
    lineHeight: lineHeights.medium,
    fontWeight: fontWeights.regular,
  },
  small: {
    fontsize: fontSizes.small,
    lineHeight: lineHeights.small,
    fontWeight: fontWeights.regular,
  },
  tiny: {
    fontsize: fontSizes.xsmall,
    lineHeight: lineHeights.xsmall,
    fontWeight: fontWeights.regular,
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
  sectionTitle: {
    fontsize: fontSizes.xsmall,
    lineHeight: lineHeights.xsmall,
    fontWeight: fontWeights.medium,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  smallestException: {
    fontsize: fontSizes.xxsmall,
    lineHeight: lineHeights.xxsmall,
    fontWeight: fontWeights.regular,
  },
});

export default Text;
