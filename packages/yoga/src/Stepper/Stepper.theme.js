const Stepper = ({ colors, spacing, fontSizes, fontWeights, radii }) => ({
  padding: {
    left: spacing.xxlarge,
    right: spacing.xxlarge,
  },
  line: {
    backgroundColor: {
      active: colors.primary[3],
      inactive: colors.gray[3],
    },
  },
  dot: {
    radius: radii.circle,
    backgroundColor: {
      active: colors.primary[3],
      inactive: colors.gray[3],
    },
  },
  label: {
    font: {
      weight: fontWeights.bold,
      size: fontSizes.xsmall,
    },
    color: {
      active: colors.primary[3],
      inactive: colors.gray[7],
    },
  },
});

export default Stepper;
