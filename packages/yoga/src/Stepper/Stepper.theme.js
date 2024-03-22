const Stepper = ({ colors, spacing, radii }) => ({
  padding: {
    left: spacing.xxlarge,
    right: spacing.xxlarge,
  },
  line: {
    backgroundColor: {
      active: colors.primary,
      inactive: colors.elements.backgroundAndDisabled,
      secondary: colors.secondary,
    },
  },
  dot: {
    radius: radii.circle,
    backgroundColor: {
      active: colors.primary,
      inactive: colors.elements.backgroundAndDisabled,
      secondary: colors.secondary,
    },
  },
  label: {
    color: {
      active: colors.primary,
      inactive: colors.elements.selectionAndIcons,
      secondary: colors.secondary,
    },
  },
});

export default Stepper;
