const NavigationMenu = ({ colors, fontWeights, radii, spacing }) => ({
  avatar: {
    height: spacing.xlarge,
    width: spacing.xlarge,
  },
  backgroundColor: {
    default: colors.elements.backgroundAndDisabled,
    hover: colors.light,
    stamina: colors.secondary,
    yoga: colors.yoga,
    white: colors.white,
  },
  border: {
    color: {
      default: colors.elements.lineAndBorders,
      white: colors.white,
    },
    radius: {
      default: radii.small,
      circle: radii.circle,
    },
  },
  font: {
    color: {
      default: colors.deep,
      active: colors.primary,
      hover: colors.secondary,
    },
    weight: { medium: fontWeights.medium },
  },
  gap: {
    xxxsmall: spacing.xxxsmall,
    xxsmall: spacing.xxsmall,
    medium: spacing.medium,
  },
  height: { xxlarge: spacing.xxlarge, xlarge: spacing.xlarge },
  icon: {
    height: spacing.medium,
    width: spacing.medium,
    fill: {
      default: colors.deep,
      active: colors.primary,
      hover: colors.secondary,
    },
  },
  padding: {
    xxxsmall: spacing.xxxsmall,
    xxsmall: spacing.xxsmall,
    xsmall: spacing.xsmall,
    small: spacing.small,
  },
  tag: {
    color: { default: colors.white },
  },
  width: { xxlarge: spacing.xxlarge, xlarge: spacing.xlarge },
});

export default NavigationMenu;
