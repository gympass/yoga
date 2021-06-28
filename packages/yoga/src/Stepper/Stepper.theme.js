const Stepper = ({ colors, spacing, fontSizes, fontWeights, radii }) => ({
  padding: {
    left: spacing.xxlarge,
    right: spacing.xxlarge,
  },
  line: {
    backgroundColor: {
      active: colors.primary,
      inactive: colors.elements.backgroundAndDisabled,
    },
  },
  dot: {
    radius: radii.circle,
    backgroundColor: {
      active: colors.primary,
      inactive: colors.elements.backgroundAndDisabled,
    },
  },
  label: {
    font: {
      weight: fontWeights.bold,
      size: fontSizes.xsmall,
    },
    color: {
      active: colors.primary,
      inactive: colors.elements.selectionAndIcons,
    },
  },
});

export default Stepper;
