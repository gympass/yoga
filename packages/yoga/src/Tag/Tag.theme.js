const Tag = ({ spacing, fontSizes, fontWeights, radii, borders }) => ({
  icon: {
    size: {
      default: spacing.small,
      small: spacing.xsmall,
    },
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
    default: {
      top: spacing.xxxsmall,
      right: spacing.xxsmall,
      bottom: spacing.xxxsmall,
      left: spacing.xxsmall,
    },
    small: {
      right: spacing.xxxsmall,
      left: spacing.xxxsmall,
    },
  },
  border: {
    width: borders.small,
    radius: radii.xsmall,
  },
});

export default Tag;
