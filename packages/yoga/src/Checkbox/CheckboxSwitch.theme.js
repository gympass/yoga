import { hexToRgb } from '@gympass/yoga-common';

const CheckboxSwitch = ({
  colors,
  radii,
  transition,
  spacing,
  elevations,
}) => ({
  track: {
    width: 48,
    height: 24,
    backgroundColor: colors.elements.selectionAndIcons,
    radii: radii.circle,
    transition: {
      duration: transition.duration[1],
    },
    checked: {
      backgroundColor: colors.primary,
    },
    disabled: {
      backgroundColor: colors.elements.backgroundAndDisabled,
    },
  },
  thumb: {
    width: spacing.medium,
    height: spacing.medium,
    shadowScale: 1.6,
    left: 2,
    radii: radii.circle,
    backgroundColor: colors.white,
    shadow: elevations.small,
    transition: {
      duration: transition.duration[1],
    },
    checked: {
      backgroundColor: colors.primary,
    },
    disabled: {
      backgroundColor: colors.white,
    },
  },
  focus: {
    checked: {
      backgroundColor: hexToRgb(colors.primary, 0.5),
    },
    disabled: {
      backgroundColor: hexToRgb(colors.elements.backgroundAndDisabled, 0.5),
    },
  },
  hover: {
    checked: {
      backgroundColor: hexToRgb(colors.primary, 0.25),
    },
    disabled: {
      backgroundColor: hexToRgb(colors.elements.backgroundAndDisabled, 0.25),
    },
  },
  pressed: {
    checked: {
      backgroundColor: hexToRgb(colors.primary, 0.75),
    },
    disabled: {
      backgroundColor: hexToRgb(colors.elements.lineAndBorders, 0.75),
    },
  },
});

export default CheckboxSwitch;
