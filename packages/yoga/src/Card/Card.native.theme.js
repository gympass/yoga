const CardNative = ({ colors, spacing, lineHeights }) => ({
  plan: {
    title: {
      margin: {
        top: spacing.xxsmall,
        bottom: spacing.xxsmall,
      },
      lineHeight: lineHeights.medium,
    },
    description: {
      color: colors.text.secondary,
    },
    price: {
      margin: {
        bottom: spacing.large,
      },
    },
    list: {
      margin: {
        top: spacing.large,
      },
      item: {
        icon: {
          margin: {
            right: spacing.xxsmall,
          },
        },
      },
    },
    actions: {
      buttonText: {
        margin: {
          top: spacing.medium,
        },
      },
      margin: {
        top: spacing.xxsmall,
      },
    },
  },
});

export default CardNative;
