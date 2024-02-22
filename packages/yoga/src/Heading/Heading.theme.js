const Heading = ({ spacing, colors }) => ({
  background: colors.white,
  padding: {
    vertical: spacing.xxxsmall,
    horizontal: spacing.small,
  },
  height: spacing.xxxlarge,
  button: {
    color: colors.secondary,
    width: spacing.xxlarge + spacing.xxsmall,
    height: spacing.xxlarge + spacing.xxsmall,
    backgroundWidth: spacing.xxlarge,
    backgroundHeight: spacing.xxlarge,
    background: colors.elements.lineAndBorders,
  },
});

export default Heading;
