const CardNative = ({ colors, spacing }) => ({
  plan: {
    title: {
      margin: {
        top: spacing.xsmall,
        bottom: spacing.xsmall,
      },
    },
    description: {
      color: colors.text.secondary,
    },
    price: {
      margin: {
        bottom: spacing.xsmall,
      },
    },
    list: {
      margin: {
        top: spacing.zero,
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
        top: spacing.small,
      },
    },
  },
});

export default CardNative;
