/**
 * @param {import('../Theme/theme/theme').Theme}
 */
const Rating = ({ spacing, colors }) => ({
  backgroundColor: colors.energy,
  icon: {
    size: 12,
  },
  gutter: spacing.xxxsmall,
});

export default Rating;
