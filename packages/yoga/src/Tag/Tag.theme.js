const Tag = ({ spacing, fontSizes, fontWeights, radii }) => ({
  icon: {
    margin: {
      right: spacing.xxsmall,
    },
  },
  font: {
    size: fontSizes.xsmall,
    weight: fontWeights.bold,
  },
  padding: {
    top: spacing.xsmall,
    right: spacing.xsmall,
    bottom: spacing.xsmall,
    left: spacing.xsmall,
  },
  border: {
    radius: radii.rounded,
  },
});

export default Tag;
