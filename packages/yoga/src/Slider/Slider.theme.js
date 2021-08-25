const Slider = ({
  colors,
  radii,
  elevations,
  spacing,
  fontWeights,
  fontSizes,
}) => ({
  track: {
    backgroundColor: {
      active: colors.primary,
      inactive: colors.elements.lineAndBorders,
    },
    border: {
      radius: radii.circle,
    },
  },
  step: {
    backgroundColor: {
      active: colors.primary,
      inactive: colors.elements.lineAndBorders,
    },
    border: {
      radius: radii.circle,
    },
  },
  marker: {
    backgroundColor: colors.primary,
    border: {
      color: colors.white,
      radius: radii.circle,
    },
    shadow: elevations.small,
  },
  tooltip: {
    shadow: elevations.medium,
    radius: radii.small,
    backgroundColor: colors.elements.backgroundAndDisabled,
    distance: spacing.large,
    padding: {
      top: spacing.xxxsmall,
      right: spacing.xxsmall,
      bottom: spacing.xxxsmall,
      left: spacing.xxsmall,
    },
    font: {
      color: colors.text.secondary,
      title: {
        weight: fontWeights.regular,
      },
      description: {
        weight: fontWeights.regular,
      },
    },
    ribbon: {
      backgroundColor: colors.primary,
      radius: radii.small,
      padding: {
        top: spacing.xxxsmall,
        right: spacing.xxsmall,
        bottom: spacing.xxxsmall,
        left: spacing.xxsmall,
      },
      font: {
        color: colors.white,
        weight: fontWeights.bold,
        size: fontSizes.xsmall,
      },
    },
  },
});

export default Slider;
