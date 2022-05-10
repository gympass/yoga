import { CheckedFull, AlertTriangle, Info } from '@gympass/yoga-icons';

const Snackbar = ({ colors, elevations, radii, spacing }) => ({
  border: {
    radius: radii.small,
  },
  height: {
    min: spacing.xxxlarge,
    max: spacing.huge,
  },
  padding: {
    default: spacing.small,
    vertical: spacing.xsmall,
    horizontal: spacing.small,
  },
  position: {
    desktop: {
      bottom: spacing.xxlarge,
      right: spacing.xxlarge,
    },
    mobile: {
      bottom: spacing.small,
      right: spacing.small,
      left: spacing.small,
    },
  },
  shadow: {
    default: elevations.small,
  },
  variant: {
    color: {
      success: colors.feedback.success.light,
      failure: colors.feedback.attention.light,
      info: colors.feedback.informative.light,
      attention: colors.feedback.attention.light,
      informative: colors.feedback.informative.light,
    },
    icon: {
      success: CheckedFull,
      failure: AlertTriangle,
      info: Info,
    },
  },
  minWidth: {
    desktop: 400,
    mobile: 320,
  },
  maxWidth: {
    default: 600,
  },
  margin: {
    top: spacing.zero,
    right: spacing.medium,
    bottom: spacing.medium,
    left: spacing.medium,
    horizontal: spacing.medium,
  },
});

export default Snackbar;
