const RadioGroup = ({
  radii,
  colors,
  fontWeights,
  spacing,
  borders,
  fontSizes,
}) => ({
  button: {
    border: {
      radius: radii.circle,
      width: borders.small,
      color: colors.elements.backgroundAndDisabled,
    },
    backgroundColor: 'transparent',
    padding: {
      right: spacing.large,
      left: spacing.large,
    },
    height: {
      normal: 40,
      small: 32,
    },
  },
  radio: {
    size: 20,
    backgroundColor: colors.elements.selectionAndIcons,
    border: {
      radius: radii.circle,
    },
  },
  font: {
    size: fontSizes.small,
    color: colors.text.primary,
  },
  hover: {
    backgroundColor: colors.elements.backgroundAndDisabled,
  },
  disabled: {
    backgroundColor: colors.elements.backgroundAndDisabled,
  },
  checked: {
    backgroundColor: colors.primary,
    font: {
      color: colors.white,
      weight: fontWeights.bold,
    },
    hover: {
      backgroundColor: colors.primary,
    },
  },
});

export default RadioGroup;
