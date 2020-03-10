const checkbox = ({ spacing, colors, borders, radii, fontSizes }) => ({
  size: 24,
  margin: {
    right: spacing.xsmall,
  },
  border: {
    width: borders.medium,
    color: colors.primary[3],
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
    selected: {
      font: {
        color: colors.negative[1],
      },
    },
  },
  hover: {
    backgroundColor: colors.primary[1],
    border: {
      radius: radii.circle,
    },
  },
  checked: {
    backgroundColor: colors.primary[3],
  },
  disabled: {
    backgroundColor: colors.gray[7],
    border: {
      color: colors.gray[7],
    },
  },
  error: {
    backgroundColor: colors.negative[1],
    border: {
      color: colors.negative[1],
    },
  },
});

export default checkbox;
