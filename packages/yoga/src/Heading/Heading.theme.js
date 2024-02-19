const Heading = ({ spacing, colors }) => ({
  background: colors.white,
  padding: {
    vertical: spacing.xxxsmall,
    horizontal: spacing.medium,
  },
  height: spacing.xxxlarge,
  button: {
    color: colors.secondary,
    width: spacing.xxlarge + spacing.xxxsmall,
    height: spacing.xxlarge + spacing.xxxsmall,
    backgroundWidth: spacing.xxlarge,
    backgroundHeight: spacing.xxlarge,
    background: colors.elements.lineAndBorders,
  },
});

export default Heading;
