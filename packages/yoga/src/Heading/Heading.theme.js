const Heading = ({ spacing }) => ({
  paddingTop: spacing.medium,
  paddingLeft: spacing.medium,
  paddingRight: spacing.medium,
  paddingBottom: spacing.large,
  rightIcons: {
    paddingLeft: spacing.large,
  },
  titleContainer: {
    marginTop: spacing.medium,
    avatar: {
      smallSize: spacing.xxlarge,
      largeSize: spacing.huge,
    },
  },
});

export default Heading;
