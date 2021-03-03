const Tag = ({ spacing, fontSizes, fontWeights, radii, borders }) => ({
  icon: {
    size: spacing.small,
    margin: {
      right: spacing.xxxsmall,
    },
  },
  font: {
    size: fontSizes.xsmall,
    lineHeight: fontSizes.medium,
    weight: fontWeights.medium,
  },
  padding: {
    top: spacing.xxxsmall,
    right: spacing.xxsmall,
    bottom: spacing.xxxsmall,
    left: spacing.xxsmall,
  },
  border: {
    width: borders.small,
    radius: radii.semiRounded,
  },
});

export default Tag;
