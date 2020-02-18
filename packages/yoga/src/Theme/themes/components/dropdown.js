const dropdown = ({
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  spacing,
}) => ({
  width: 312,
  selector: {
    background: colors.white,
    padding: {
      top: 14,
      right: spacing.zero,
      bottom: 14,
      left: spacing.medium,
    },
    border: {
      radius: radii.rounded,
      color: colors.gray[7],
    },
  },
  input: {
    font: {
      color: colors.gray[7],
      size: fontSizes.small,
      lineHeight: lineHeights.small,
    },
  },
  button: {
    paddingRight: 14,
  },
  optionsList: {
    backgroundColor: colors.white,
    top: spacing.xxlarge,
    border: {
      radius: {
        top: radii.sharp,
        right: radii.sharp,
        bottom: radii.rounded,
        left: radii.rounded,
      },
      color: colors.gray[7],
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
      radius: {
        top: radii.sharp,
        right: radii.sharp,
        bottom: radii.rounded,
        left: radii.rounded,
      },
    },
    font: {
      color: colors.gray[spacing.xsmall],
      size: fontSizes.small,
      lineHeight: lineHeights.small,
      weight: fontWeights.regular,
    },
  },
  hover: {
    option: {
      backgroundColor: {
        default: colors.gray[1],
        selected: colors.gray[2],
      },
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
    input: {
      font: {
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
