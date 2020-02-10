const progress = ({ spacing, colors, radii, fontSizes }) => ({
  height: spacing.xsmall,
  backgroundColor: {
    value: colors.primary[3],
    bar: colors.gray[1],
  },
  border: {
    radius: radii.rounded,
  },
  label: {
    font: {
      size: fontSizes.xsmall,
    },
  },
});

export default progress;
