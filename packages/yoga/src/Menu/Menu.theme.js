const Menu = ({ spacing, radii }) => ({
  border: {
    radius: radii.small,
  },
  width: {
    min: 176,
    max: 280,
  },
  margin: {
    default: spacing.xxsmall,
  },
  padding: {
    top: spacing.xxsmall,
    right: spacing.small,
    bottom: spacing.xxsmall,
    left: spacing.small,
  },
});

export default Menu;
