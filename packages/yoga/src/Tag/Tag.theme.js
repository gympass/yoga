/**
 * @param {{
 *  spacing: import('packages/tokens/src/global/spacing').Spacing
 *  fontSizes: import('packages/tokens/src/global/font-sizes').FontSize
 *  fontWeights: import('packages/tokens/src/global/font-weights').FontWeight
 *  radii: import('packages/tokens/src/global/radii').Radii
 * }} tag
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
