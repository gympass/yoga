const Header = ({ colors, elevations, spacing }) => ({
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
  shadow: elevations.medium,
  background: colors.white,
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
