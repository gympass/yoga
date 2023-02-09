const DropdownInput = ({
  colors,
  radii,
  spacing,
  borders,
  fontSizes,
  fontWeights,
}) => ({
  width: 320,
  container: {
    background: colors.white,
    height: 52,
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
  itemDropDown: {
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.medium,
    height: 72,
  },
});

export default DropdownInput;
