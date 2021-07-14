const Snackbar = ({ colors, elevations, radii, spacing }) => ({
  border: {
    radius: radii.small,
  },
  height: {
    min: spacing.xxxlarge,
    max: spacing.huge,
  },
  padding: {
    default: spacing.small,
  },
  shadow: {
    default: elevations.small,
  },
  variant: {
    success: {
      backgroundColor: colors.feedback.success.light,
    },
  },
  width: {
    min: 320,
    max: 600,
  },
});

export default Snackbar;
