import { CheckedFull, AlertTriangle, AlertCircle } from '@gympass/yoga-icons';

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
  },
  position: {
    bottom: 40,
    right: 40,
  },
  shadow: {
    default: elevations.small,
  },
  variant: {
    color: {
      success: colors.feedback.success.light,
      failure: colors.feedback.attention.light,
      info: colors.feedback.informative.light,
    },
    icon: {
      success: CheckedFull,
      failure: AlertTriangle,
      info: AlertCircle,
    },
  },
  width: {
    min: 320,
    max: 600,
  },
});

export default Snackbar;
