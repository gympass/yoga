const Checkbox = ({ spacing, colors, borders, radii, fontSizes }) => ({
  size: 24,
  margin: {
    right: spacing.xxsmall,
  },
  border: {
    width: borders.medium,
    radius: radii.semiRounded,
  },
  label: {
    padding: {
      left: spacing.xxsmall,
    },
    font: {
      size: fontSizes.small,
      color: colors.dark,
    },
  },
  helper: {
    margin: {
      top: spacing.xxxsmall,
    },
    font: {
      size: fontSizes.small,
      color: colors.gray[7],
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
    backgroundColor: colors.gray[7],
    border: {
      color: colors.gray[7],
    },
  },
});

export default Checkbox;
