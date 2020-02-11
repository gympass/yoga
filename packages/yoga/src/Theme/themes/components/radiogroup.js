const radiogroup = ({
  radii,
  colors,
  fontWeights,
  spacing,
  borders,
  fontSizes,
}) => ({
  radio: {
    border: {
      radius: radii.circle,
    },
    hover: {
      backgroundColor: colors.gray[1],
    },
    backgroundColor: {
      enabled: 'transparent',
    },
    checked: {
      backgroundColor: {
        enabled: colors.primary[3],
      },
      textColor: {
        enabled: colors.white,
      },
      font: {
        weight: fontWeights.bold,
      },
    },
    padding: {
      right: spacing.xlarge,
      left: spacing.xlarge,
    },
    height: {
      normal: 40,
      small: 32,
    },
    font: {
      size: fontSizes.small,
    },
  },
  radii: radii.circle,
  border: {
    width: borders.small,
    color: colors.gray[3],
  },
});

export default radiogroup;
