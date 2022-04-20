import Input from '../Input/Input.theme';

const AutoComplete = (tokens) => ({
  ...Input(tokens),
  field: {
    backgroundColor: tokens.colors.white,
  },
  list: {
    padding: {
      top: tokens.spacing.small,
      right: tokens.spacing.small,
      bottom: tokens.spacing.small,
      left: tokens.spacing.small,
    },
    font: {
      size: tokens.fontSizes.small,
      weight: {
        default: tokens.fontWeights.regular,
        matched: tokens.fontWeights.bold,
      },
      lineHeight: tokens.lineHeights.small,
    },
    backgroundColor: {
      default: tokens.colors.white,
      hover: tokens.colors.clear,
    },
  },
});

export default AutoComplete;
