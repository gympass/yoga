const DropdownInput = ({ colors, radii, spacing, borders }) => ({
  width: 320,
  container: {
    background: colors.white,
    border: {
      width: borders.small,
      radius: radii.small,
      color: colors.medium,
    },
    margin: {
      top: spacing.xxsmall,
    },
  },
});

export default DropdownInput;
