const text = ({ fontSizes, lineHeights, fontWeights }) => ({
  h1: {
    fontsize: fontSizes.xxlarge,
    lineHeight: lineHeights.xlarge,
    fontWeight: fontWeights.bold,
  },
  h2: {
    fontsize: fontSizes.xlarge,
    lineHeight: lineHeights.large,
    fontWeight: fontWeights.bold,
  },
  h3: {
    fontsize: fontSizes.large,
    lineHeight: lineHeights.medium,
    fontWeight: fontWeights.bold,
  },
  h4: {
    fontsize: fontSizes.medium,
    lineHeight: lineHeights.small,
    fontWeight: fontWeights.bold,
  },
  p: {
    fontsize: fontSizes.medium,
    lineHeight: lineHeights.small,
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
});

export default text;
