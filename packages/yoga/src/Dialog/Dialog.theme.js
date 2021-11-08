const Dialog = ({ radii, spacing }) => ({
  border: {
    radius: radii.regular,
  },
  padding: {
    default: spacing.xlarge,
    top: spacing.xxlarge,
    withIconClose: spacing.huge,
  },
  width: {
    default: 580,
  },
  height: {
    min: 184,
  },
  position: {
    default: spacing.zero,
  },
});

export default Dialog;
