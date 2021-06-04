const Input = ({
  colors,
  fontSizes,
  fontWeights,
  borders,
  radii,
  spacing,
}) => ({
  width: 320,
  height: 52,
  font: {
    color: {
      default: colors.text.secondary,
      focus: colors.text.primary,
    },
    size: fontSizes.small,
    weight: fontWeights.regular,
  },
  border: {
    width: borders.small,
    radius: radii.small,
    color: {
      default: colors.elements.lineAndBorders,
      typed: colors.text.primary,
    },
  },
  padding: {
    top: spacing.small,
    right: spacing.small,
    bottom: spacing.small,
    left: spacing.small,
  },
  label: {
    color: {
      default: colors.text.secondary,
      focus: colors.text.primary,
    },
    padding: {
      right: spacing.xxxsmall,
      left: spacing.xxxsmall,
    },
    font: {
      size: {
        default: fontSizes.small,
        typed: fontSizes.xsmall,
      },
      weight: fontWeights.regular,
    },
  },
  helper: {
    color: {
      default: colors.text.secondary,
      focus: colors.text.primary,
    },
    margin: {
      top: spacing.xxxsmall,
    },
    font: {
      size: fontSizes.xsmall,
    },
  },
});

export default Input;
