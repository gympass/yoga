const Progress = ({ spacing, colors, radii, fontSizes }) => ({
  height: spacing.xxsmall,
  backgroundColor: {
    bar: colors.elements.backgroundAndDisabled,
  },
  border: {
    radius: radii.small,
  },
  label: {
    font: {
      size: fontSizes.xsmall,
    },
  },
});

export default Progress;
