const Tag = ({ spacing, radii, borders }) => ({
  icon: {
    size: {
      default: spacing.small,
      small: spacing.xsmall,
    },
    margin: {
      right: 'xxxsmall',
    },
  },
  padding: {
    default: {
      top: spacing.xxxsmall,
      right: spacing.xxsmall,
      bottom: spacing.xxxsmall,
      left: spacing.xxsmall,
    },
    small: {
      top: spacing.zero,
      right: spacing.xxxsmall,
      bottom: spacing.zero,
      left: spacing.xxxsmall,
    },
  },
  border: {
    width: borders.small,
    radius: radii.xsmall,
  },
});

export default Tag;
