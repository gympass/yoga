import { hexToRgb } from '@gympass/yoga-common';

/**
 *  @typedef {import('@gympass/yoga-tokens/src/global/colors').Colors} Colors
 *  @typedef {import('@gympass/yoga-tokens/src/global/radii').Radii} Radii
 *  @typedef {import('@gympass/yoga-tokens/src/global/spacing').Spacing} Spacing
 *  @typedef {import('@gympass/yoga-tokens/src/global/transition').Transition} Transition
 *  @typedef {import('@gympass/yoga-tokens/src/global/elevations').Elevation} Elevation
 */

/**
 * @param {{
 *  colors: Colors
 *  radii: Radii
 *  transition: Transition
 *  spacing: Spacing
 *  elevations: Elevation
 * }} props
 */
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
