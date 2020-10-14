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
    backgroundColor: colors.elements.lineAndBorders,
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
    width: spacing.small,
    height: spacing.small,
    left: spacing.xxxsmall,
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
      backgroundColor: colors.elements.lineAndBorders,
    },
  },
  focus: {
    checked: {
      backgroundColor: hexToRgb(colors.primary, 0.2),
    },
    disabled: {
      backgroundColor: hexToRgb(colors.elements.selectionAndIcons, 0.2),
    },
  },
});

export default CheckboxSwitch;
