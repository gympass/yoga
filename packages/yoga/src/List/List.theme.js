const List = ({ spacing, borders, colors }) => ({
  listItem: {
    padding: {
      top: spacing.medium,
      right: spacing.large,
      bottom: spacing.medium,
      left: spacing.large,
    },
  },
  border: {
    width: borders.small,
    color: colors.elements.backgroundAndDisabled,
  },
});

export default List;
