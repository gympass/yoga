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
    horizontal: spacing.small,
    vertical: spacing.xxsmall,
  },
});

export default Menu;
