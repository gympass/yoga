const dropdown = ({
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  spacing,
  borders,
}) => ({
  width: 320,
  selector: {
    background: colors.white,
    padding: {
      top: spacing.medium,
      right: spacing.medium,
      bottom: spacing.medium,
      left: spacing.medium,
    },
    border: {
      radius: radii.rounded,
      color: colors.gray[4],
    },
  },
  arrow: {
    fill: colors.gray[7],
  },
  input: {
    font: {
      color: colors.gray[7],
      size: fontSizes.small,
      lineHeight: lineHeights.small,
    },
  },
  button: {
    paddingRight: spacing.medium,
  },
  optionsList: {
    backgroundColor: colors.white,
    border: {
      top: radii.sharp,
      right: radii.sharp,
      bottom: radii.rounded,
      left: radii.rounded,
      radius: {
        top: radii.sharp,
        right: radii.sharp,
        bottom: radii.rounded,
        left: radii.rounded,
      },
      color: colors.dark,
    },
  },
  option: {
    height: spacing.xxlarge,
    backgroundColor: colors.white,
    padding: {
      top: spacing.zero,
      right: spacing.medium,
      bottom: spacing.zero,
      left: spacing.medium,
    },
    border: {
      width: borders.small,
      color: colors.gray[1],
      radius: {
        top: radii.sharp,
        right: radii.sharp,
        bottom: radii.rounded,
        left: radii.rounded,
      },
    },
    font: {
      color: colors.gray[8],
      size: fontSizes.small,
      lineHeight: lineHeights.small,
      weight: fontWeights.regular,
    },
  },
  backdrop: {
    content: {
      minHeight: 200,
      backgroundColor: colors.white,
      border: {
        radius: {
          topLeft: radii.circle,
          topRight: radii.circle,
        },
      },
    },
  },
  hover: {
    selector: {
      border: {
        color: colors.dark,
      },
    },
    option: {
      backgroundColor: colors.gray[1],
    },
  },
  disabled: {
    selector: {
      border: {
        color: colors.gray[3],
      },
    },
    input: {
      font: {
        color: colors.gray[3],
      },
    },
    arrow: {
      fill: colors.gray[3],
    },
  },
  selected: {
    selector: {
      border: {
        color: colors.dark,
      },
    },
    input: {
      font: {
        color: colors.dark,
      },
    },
    optionsList: {
      border: {
        color: colors.dark,
      },
    },
    option: {
      font: {
        color: colors.dark,
        weight: fontWeights.bold,
      },
    },
  },
});

export default dropdown;
