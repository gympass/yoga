const List = ({ spacing, borders, colors }) => ({
  listItem: {
    padding: {
      top: spacing.medium,
      right: spacing.large,
      bottom: spacing.medium,
      left: spacing.large,
    },
    small: {
      padding: {
        top: spacing.xxsmall,
        right: spacing.medium,
        bottom: spacing.xxsmall,
        left: spacing.medium,
      },
    },
    selectable: {
      color: colors.clear,
    },
  },
  border: {
    width: borders.small,
    color: colors.elements.backgroundAndDisabled,
  },
});

export default List;
