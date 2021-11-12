const BottomSheet = ({ radii, spacing }) => ({
  border: {
    radius: radii.regular,
  },
  padding: {
    top: spacing.large,
    right: spacing.medium,
    bottom: spacing.large,
    left: spacing.medium,
  },
  width: {
    default: 100,
  },
  height: {
    min: 160,
  },
  position: {
    default: spacing.zero,
  },
});

export default BottomSheet;
