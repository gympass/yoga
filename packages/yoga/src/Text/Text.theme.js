const Text = ({ fontSizes, lineHeights, fontWeights }) => ({
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
});

export default Text;
