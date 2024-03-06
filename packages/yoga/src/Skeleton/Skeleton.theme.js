const Skeleton = ({ colors, lineHeights, radii }) => ({
  border: {
    circular: radii.circle,
  },
  height: {
    text: {
      h1: lineHeights.huge,
      h2: lineHeights.xxxlarge,
      h3: lineHeights.xxlarge,
      h4: lineHeights.xlarge,
      h5: lineHeights.large,
      body1: lineHeights.medium,
      body2: lineHeights.small,
      overline: lineHeights.xsmall,
      exception: lineHeights.xxsmall,
    },
  },
  background: {
    primary: colors.clear,
    secondary: colors.clearNew,
  },
});

export default Skeleton;
