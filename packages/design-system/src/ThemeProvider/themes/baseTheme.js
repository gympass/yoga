import tokens from '@gympass/tokens';

const { spacing, elevate, radii, fontSizes, fontWeights, colors } = tokens;

const baseTheme = ({ primary, secondary }) => {
  const baseFontSize = fontSizes[3]; // 16

  const components = {
    button: {
      padding: {
        top: spacing.small,
        right: spacing.large,
        bottom: spacing.small,
        left: spacing.large,
      },
      border: {
        width: 'none',
        radius: radii.circle,
      },
      backgroundColor: primary[3],
      hover: {
        shadow: elevate(primary[2], 2),
      },
      active: {
        shadow: elevate(primary[2], 1),
      },
      font: {
        size: fontSizes[2],
        weight: fontWeights.bold,
        color: colors.white,
      },
    },
    switch: {
      track: {
        width: '48px',
        height: '24px',
        background: colors.gray[2],
        shadow: '0px 2px 8px rgba(7, 18, 37, 0.10);',
        radii: '64px',
        transition: '0.3s',
        cursor: 'pointer',
        checked: {
          background: {
            default: primary[3],
            secondary: secondary[3],
          },
        },
        disabled: {
          background: colors.gray[1],
          cursor: 'default',
        },
      },
      thumb: {
        width: '16px',
        height: '16px',
        left: `${spacing.xxsmall}px`,
        radii: `${radii.circle}px`,
        background: colors.white,
        shadow: '0px 1px 2px rgba(206, 206, 232, 0.6)',
        transition: '0.3s',
        checked: {
          background: primary[3],
        },
        disabled: {
          background: colors.gray[2],
        },
      },
    },
  };

  return { components, baseFontSize };
};

export default baseTheme;
