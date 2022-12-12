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
  clear: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'none',
    outline: 'none',
    padding: spacing.medium,
  },
  containerDropDown: {
    margin: 0,
    height: 272,
    overflowY: 'scroll',
    background: colors.white,
    padding: {
      right: spacing.small,
      left: spacing.small,
    },
    border: {
      width: borders.small,
      radius: radii.small,
      color: colors.medium,
    },
  },
});

export default DropdownInput;
