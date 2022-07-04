const Heading = ({ spacing, colors }) => ({
  background: colors.white,
  padding: {
    vertical: spacing.small,
    horizontal: spacing.huge,
    horizontalMobile: spacing.medium,
  },
  height: spacing.xxxlarge,
  button: {
    width: spacing.large,
    height: spacing.large,
    marginRight: spacing.medium,
  },
});

export default Heading;
