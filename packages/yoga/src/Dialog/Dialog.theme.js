const Dialog = ({ radii, spacing }) => ({
  border: {
    radius: radii.regular,
  },
  padding: {
    default: spacing.xlarge,
    top: spacing.xxlarge,
    withCloseButton: spacing.large,
  },
  width: {
    default: 580,
  },
  height: {
    min: 160,
  },
  position: {
    default: spacing.zero,
  },
});

export default Dialog;
