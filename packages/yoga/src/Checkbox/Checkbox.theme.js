const Checkbox = ({ spacing, colors, borders, radii, fontSizes }) => ({
  size: 24,
  margin: {
    right: spacing.xxsmall,
  },
  border: {
    width: borders.medium,
    radius: radii.xsmall,
    color: colors.mediumNew,
  },
  label: {
    padding: {
      left: spacing.xxsmall,
    },
    font: {
      size: fontSizes.medium,
      color: colors.text.primary,
    },
  },
  helper: {
    margin: {
      top: spacing.xxxsmall,
    },
    font: {
      size: fontSizes.small,
      color: colors.text.secondary,
    },
  },
  hover: {
    border: {
      radius: radii.circle,
    },
  },
  checked: {
    icon: {
      color: colors.white,
    },
  },
  disabled: {
    backgroundColor: colors.white,
    border: {
      color: colors.steady,
    },
    label: {
      font: {
        color: colors.steady,
      },
    },
  },
});

export default Checkbox;
