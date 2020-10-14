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
    radius: radii.rounded,
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
      weight: {
        default: fontWeights.regular,
        typed: fontWeights.bold,
      },
    },
  },
  helper: {
    color: colors.text.secondary,
    margin: {
      top: spacing.xxxsmall,
    },
    font: {
      size: fontSizes.xsmall,
    },
  },
});

export default Input;
