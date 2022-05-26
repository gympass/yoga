const Heading = ({ spacing, colors }) => ({
  background: colors.white,
  padding: {
    vertical: spacing.small,
    horizontal: spacing.huge,
  },
  height: 48,
  button: {
    width: 48,
    height: spacing.xxlarge,
  },
});

export default Heading;
