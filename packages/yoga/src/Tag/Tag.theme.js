/**
 *  @typedef {import('@gympass/yoga-tokens/src/global/spacing').Spacing} Spacing
 *  @typedef {import('@gympass/yoga-tokens/src/global/font-sizes').FontSize} FontSize
 *  @typedef {import('@gympass/yoga-tokens/src/global/font-weights').FontWeight} FontWeight
 *  @typedef {import('@gympass/yoga-tokens/src/global/radii').Radii} Radii
 */

/**
 * @param {{
 *  spacing: Spacing
 *  fontSizes: FontSize
 *  fontWeights: FontWeight
 *  radii: Radii
 * }} props
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
