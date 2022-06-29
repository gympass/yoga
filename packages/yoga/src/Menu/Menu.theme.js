const Menu = ({ spacing, radii, colors, fontWeights }) => ({
  border: {
    radius: radii.small,
  },
  width: {
    min: 176,
    max: 280,
  },
  margin: {
    default: spacing.small,
    medium: spacing.medium,
    xxsmall: spacing.xxsmall,
  },
  padding: {
    horizontal: spacing.small,
    vertical: spacing.xxsmall,
  },
  backgroundColor: {
    white: colors.white,
    disabled: colors.elements.backgroundAndDisabled,
  },
  text: {
    default: {
      color: colors.text.primary,
    },
    active: {
      color: colors.primary,
    },
    disabled: {
      color: colors.text.disabled,
    },
  },
  font: {
    weight: fontWeights.medium,
  },
  icon: {
    disabled: colors.elements.selectionAndIcons,
  },
});

export default Menu;
