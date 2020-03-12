const input = ({
  colors,
  fontSizes,
  fontWeights,
  borders,
  radii,
  spacing,
}) => ({
  width: 320,
  height: 52,
  font: {
    color: {
      default: colors.gray.medium,
      focus: colors.gray.darker,
    },
    size: fontSizes.small,
    weight: fontWeights.regular,
  },
  border: {
    width: borders.small,
    radius: radii.rounded,
    color: {
      default: colors.gray[4],
      typed: colors.gray.darker,
    },
  },
  padding: {
    top: spacing.medium,
    right: spacing.medium,
    bottom: spacing.medium,
    left: spacing.medium,
  },
  label: {
    color: {
      default: colors.gray.medium,
      focus: colors.gray.darker,
    },
    padding: {
      right: spacing.xxsmall,
      left: spacing.xxsmall,
    },
    font: {
      size: {
        default: fontSizes.small,
        typed: fontSizes.xsmall,
      },
      weight: {
        default: fontWeights.regular,
        typed: fontWeights.bold,
      },
    },
  },
  helper: {
    color: colors.gray.medium,
    margin: {
      top: spacing.xxsmall,
    },
    font: {
      size: fontSizes.xsmall,
    },
  },
});

export default input;
