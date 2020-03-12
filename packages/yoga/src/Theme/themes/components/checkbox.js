const checkbox = ({ spacing, colors, borders, radii, fontSizes }) => ({
  size: 24,
  margin: {
    right: spacing.xsmall,
  },
  border: {
    width: borders.medium,
    radius: radii.semiRounded,
  },
  label: {
    padding: {
      left: spacing.xsmall,
    },
    font: {
      size: fontSizes.small,
      color: colors.dark,
    },
  },
  helper: {
    margin: {
      top: spacing.xxsmall,
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

export default checkbox;
