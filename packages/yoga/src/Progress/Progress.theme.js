const Progress = ({ spacing, colors, radii, fontSizes }) => ({
  height: spacing.xxsmall,
  backgroundColor: {
    bar: colors.elements.backgroundAndDisabled,
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

export default Progress;
