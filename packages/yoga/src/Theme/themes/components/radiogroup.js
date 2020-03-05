const radiogroup = ({
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
      color: colors.gray[3],
    },
    backgroundColor: 'transparent',
    padding: {
      right: spacing.xlarge,
      left: spacing.xlarge,
    },
    height: {
      normal: 40,
      small: 32,
    },
  },
  radio: {
    size: 20,
    backgroundColor: colors.gray[6],
    border: {
      radius: radii.circle,
    },
  },
  font: {
    size: fontSizes.small,
  },
  hover: {
    backgroundColor: colors.gray[2],
  },
  disabled: {
    backgroundColor: colors.gray[5],
  },
  checked: {
    backgroundColor: colors.primary[3],
    textColor: colors.white,
    font: {
      weight: fontWeights.bold,
    },
    hover: {
      backgroundColor: colors.primary[0],
    },
  },
});

export default radiogroup;
