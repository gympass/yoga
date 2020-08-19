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
    color: colors.gray[3],
  },
});

export default List;
