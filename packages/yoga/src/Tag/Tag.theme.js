const Tag = ({ spacing, fontSizes, fontWeights, radii }) => ({
  icon: {
    margin: {
      right: spacing.xxxsmall,
    },
  },
  font: {
    size: fontSizes.xsmall,
    weight: fontWeights.bold,
  },
  padding: {
    top: spacing.small,
    right: spacing.small,
    bottom: spacing.small,
    left: spacing.small,
  },
  border: {
    radius: radii.rounded,
  },
});

export default Tag;
