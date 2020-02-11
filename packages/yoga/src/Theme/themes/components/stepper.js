const stepper = ({ colors, spacing, fontWeights, radii }) => ({
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
    },
    color: {
      active: colors.primary[3],
      inactive: colors.gray[7],
    },
  },
});

export default stepper;
