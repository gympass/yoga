const Dropdown = ({
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
      top: spacing.small,
      right: spacing.small,
      bottom: spacing.small,
      left: spacing.small,
    },
    border: {
      width: borders.small,
      radius: radii.rounded,
      color: colors.elements.lineAndBorders,
    },
  },
  arrow: {
    fill: colors.elements.lineAndBorders,
  },
  input: {
    font: {
      color: colors.elements.selectionAndIcons,
      size: fontSizes.small,
      lineHeight: lineHeights.small,
    },
  },
  button: {
    padding: {
      right: spacing.small,
    },
  },
  optionsList: {
    backgroundColor: colors.white,
    border: {
      radius: {
        topLeft: radii.sharp,
        topRight: radii.sharp,
        bottomRight: radii.rounded,
        bottomLeft: radii.rounded,
      },
      width: borders.small,
      color: colors.text.primary,
    },
  },
  option: {
    height: spacing.xxlarge,
    backgroundColor: colors.white,
    padding: {
      top: spacing.zero,
      right: spacing.small,
      bottom: spacing.zero,
      left: spacing.small,
    },
    border: {
      width: borders.small,
      color: colors.elements.backgroundAndDisabled,
      radius: {
        topLeft: radii.sharp,
        topRight: radii.sharp,
        bottomRight: radii.rounded,
        bottomLeft: radii.rounded,
      },
    },
    font: {
      color: colors.text.primary,
      size: fontSizes.small,
      lineHeight: lineHeights.small,
      weight: fontWeights.regular,
    },
  },
  backdrop: {
    content: {
      height: 320,
      backgroundColor: colors.white,
      border: {
        radius: {
          topLeft: radii.rounded,
          topRight: radii.rounded,
        },
      },
      title: {
        padding: {
          top: spacing.medium,
          right: spacing.zero,
          bottom: spacing.medium,
          left: spacing.zero,
        },
        font: {
          weight: fontWeights.bold,
          size: fontSizes.medium,
        },
      },
      option: {
        padding: {
          top: spacing.large,
          right: spacing.large,
          bottom: spacing.large,
          left: spacing.large,
        },
      },
      actions: {
        padding: {
          top: spacing.zero,
          right: spacing.large,
          bottom: spacing.large,
          left: spacing.large,
        },
      },
    },
  },
  hover: {
    selector: {
      border: {
        color: colors.text.primary,
      },
    },
    option: {
      backgroundColor: colors.elements.backgroundAndDisabled,
    },
  },
  disabled: {
    selector: {
      border: {
        color: colors.elements.backgroundAndDisabled,
      },
    },
    input: {
      font: {
        color: colors.elements.backgroundAndDisabled,
      },
    },
    arrow: {
      fill: colors.elements.backgroundAndDisabled,
    },
  },
  selected: {
    selector: {
      border: {
        color: colors.text.primary,
      },
    },
    arrow: {
      fill: colors.primary,
    },
    input: {
      font: {
        color: colors.text.primary,
      },
    },
    optionsList: {
      border: {
        color: colors.text.primary,
      },
    },
    option: {
      font: {
        color: colors.text.primary,
        weight: fontWeights.bold,
      },
    },
  },
});

export default Dropdown;
