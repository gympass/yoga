const List = ({ spacing, borders, colors }) => ({
  listItem: {
    padding: {
      top: spacing.large,
      right: spacing.xlarge,
      bottom: spacing.large,
      left: spacing.xlarge,
    },
  },
  border: {
    width: borders.small,
    color: colors.gray[3],
  },
});

export default List;
