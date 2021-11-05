const Dialog = ({ radii, spacing }) => ({
  border: {
    radius: radii.small,
  },
  height: {
    min: spacing.xxxlarge,
    max: spacing.huge,
  },
  width: {
    default: 580,
  },
  position: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

export default Dialog;
