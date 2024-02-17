const Heading = ({ spacing, colors }) => ({
  background: colors.white,
  padding: {
    vertical: spacing.xxxsmall,
    horizontal: spacing.medium,
  },
  height: spacing.xxxlarge,
  button: {
    color: colors.secondary,
    width: spacing.xxlarge,
    height: spacing.xxlarge,
    marginRight: spacing.xxxsmall,
    background: colors.elements.lineAndBorders,
  },
});

export default Heading;
