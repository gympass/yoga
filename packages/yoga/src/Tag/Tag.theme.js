/**
 * @param {import('../Theme/theme/theme').Theme}
 */
const Tag = ({ spacing, fontSizes, fontWeights, radii }) => ({
  icon: {
    margin: {
      right: spacing.xxxsmall,
    },
  },
  font: {
    size: fontSizes.xsmall,
    weight: fontWeights.bold,
  },
  padding: {
    top: spacing.xxsmall,
    right: spacing.xxsmall,
    bottom: spacing.xxsmall,
    left: spacing.xxsmall,
  },
  border: {
    radius: radii.rounded,
  },
});

export default Tag;
