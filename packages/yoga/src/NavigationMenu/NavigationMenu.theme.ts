const NavigationMenu = ({ colors, fontWeights, radii, spacing, v3theme }) => {
  return {
    avatar: {
      height: spacing.xlarge,
      width: spacing.xlarge,
    },
    backgroundColor: {
      contextMenu: v3theme ? colors.sand : colors.white,
      default: v3theme ? colors.sand : colors.clear,
      hover: v3theme ? colors.clear : colors.light,
      active: v3theme ? colors.clear : colors.yoga,
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
        tag: v3theme ? radii.small : radii.circle,
        action: radii.circle,
        contextMenu: v3theme ? radii.small : radii.circle
      },
    },
    font: {
      color: {
        default: v3theme ? colors.text.secondary : colors.deep,
        active: v3theme ? colors.text.primary : colors.vibin,
        hover: v3theme ? colors.text.secondary : colors.stamina
      },
      weight: {
        bold: fontWeights.bold,
        medium: fontWeights.regular,
      },
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
        default: v3theme ? colors.text.secondary : colors.deep,
        active: v3theme ? colors.text.primary :  colors.vibin,
        hover: v3theme ? colors.text.secondary : colors.stamina
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
    menu: {
      height: spacing.xlarge * 2,
    },
  };
};

export default NavigationMenu;
