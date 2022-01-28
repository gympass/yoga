const Header = ({ spacing }) => ({
  logo: {
    width: {
      xxs: 80,
      lg: 130,
    },
    margin: {
      xxs: spacing.medium,
      lg: 48,
    },
  },
  padding: {
    xxs: spacing.medium,
    lg: spacing.huge,
  },
  height: {
    xxs: 56,
    lg: 72,
  },
});

export default Header;
