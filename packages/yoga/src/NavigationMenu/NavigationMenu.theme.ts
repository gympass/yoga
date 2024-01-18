const NavigationMenu = ({ colors, fontWeights, radii, spacing }) => ({
  avatar: {
    height: spacing.xlarge,
    width: spacing.xlarge,
  },
  backgroundColor: {
    default: colors.clear,
    hover: colors.light,
    stamina: colors.stamina,
    yoga: colors.yoga,
    white: colors.white,
  },
  border: {
    color: {
      default: colors.light,
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
      active: colors.vibin,
      hover: colors.stamina,
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
      active: colors.vibin,
      hover: colors.stamina,
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
