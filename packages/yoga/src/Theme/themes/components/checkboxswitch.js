import { hexToRgb } from '@gympass/yoga-common';

const checkboxswitch = ({
  colors,
  radii,
  transitions,
  spacing,
  elevations,
}) => ({
  track: {
    width: 48,
    height: 24,
    backgroundColor: colors.gray[3],
    radii: radii.circle,
    transition: {
      duration: transitions.duration,
    },
    checked: {
      backgroundColor: colors.primary[3],
    },
    disabled: {
      backgroundColor: colors.gray[1],
    },
  },
  thumb: {
    width: spacing.medium,
    height: spacing.medium,
    left: spacing.xxsmall,
    radii: radii.circle,
    backgroundColor: colors.white,
    shadow: elevations.small,
    transition: {
      duration: transitions.duration,
    },
    checked: {
      backgroundColor: colors.primary[3],
    },
    disabled: {
      backgroundColor: colors.gray[3],
    },
  },
  focus: {
    checked: {
      backgroundColor: hexToRgb(colors.primary[3], 0.2),
    },
    disabled: {
      backgroundColor: hexToRgb(colors.gray[7], 0.2),
    },
  },
});

export default checkboxswitch;
