const Banner = ({ colors, spacing, radii }) => ({
  defaultBackgroundColor: colors.feedback.informative.light,
  padding: {
    top: spacing.small,
    right: spacing.small,
    bottom: spacing.small,
    left: spacing.small,
  },
  border: {
    radius: radii.small,
  },
});

export default Banner;
