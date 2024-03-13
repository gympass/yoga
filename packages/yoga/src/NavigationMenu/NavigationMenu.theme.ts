import { css } from 'styled-components';
import { merge } from '@gympass/yoga-common';

const sandy = '#F6EDDF';

const navigationMenuV3 = ({ colors, fontWeights, fontSizes, radii }) => ({
  backgroundColor: {
    contextMenu: colors.sand,
    default: colors.sand,
    hover: sandy,
    active: sandy,
  },
  border: {
    radius: {
      tag: radii.small,
      contextMenu: radii.small,
    },
  },
  font: {
    color: {
      default: colors.text.secondary,
      active: colors.text.primary,
      hover: colors.text.secondary,
    },
    weight: {
      bold: fontWeights.bold,
      medium: fontWeights.regular,
    },
    size: {
      contextMenu: {
        title: fontSizes.xlarge,
      },
    },
  },
  hover: {
    contextMenu: css`
      background-color: ${sandy};
    `,
  },
  icon: {
    fill: {
      default: colors.text.secondary,
      actions: colors.text.secondary,
      active: colors.text.primary,
      hover: colors.text.secondary,
    },
  },
});

const NavigationMenu = theme => {
  const {
    colors,
    elevations,
    fontWeights,
    fontSizes,
    radii,
    spacing,
    v3theme,
  } = theme;

  const baseTheme = {
    avatar: {
      height: spacing.xlarge,
      width: spacing.xlarge,
    },
    backgroundColor: {
      contextMenu: colors.white,
      default: colors.clear,
      hover: colors.light,
      active: colors.yoga,
      tag: colors.stamina,
      bottomMenu: colors.white,
    },
    border: {
      color: {
        default: colors.light,
      },
      radius: {
        default: radii.small,
        circle: radii.circle,
        tag: v3theme ? radii.small : radii.circle,
        action: radii.circle,
        contextMenu: v3theme ? radii.small : radii.circle,
      },
    },
    font: {
      color: {
        default: colors.deep,
        active: colors.vibin,
        hover: colors.stamina,
      },
      weight: {
        bold: fontWeights.medium,
        medium: fontWeights.regular,
      },
      size: {
        contextMenu: {
          title: fontSizes.small,
        },
      },
    },
    gap: {
      xxxsmall: spacing.xxxsmall,
      xxsmall: spacing.xxsmall,
      medium: spacing.medium,
    },
    height: {
      xxlarge: spacing.xxlarge,
      xlarge: spacing.xlarge,
      contextMenu: spacing.xlarge * 2,
      bottomMenu: spacing.xxxlarge,
    },
    hover: {
      contextMenu: css`
        box-shadow: ${elevations.small};
      `,
    },
    icon: {
      height: spacing.medium,
      width: spacing.medium,
      fill: {
        default: colors.deep,
        actions: colors.primary,
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
  };

  if (!v3theme) {
    return baseTheme;
  }

  return merge(baseTheme, navigationMenuV3(theme));
};

export default NavigationMenu;
