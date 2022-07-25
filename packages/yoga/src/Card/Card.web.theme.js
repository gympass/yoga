const CardWeb = ({ spacing, lineHeights }) => ({
  plan: {
    title: {
      margin: {
        bottom: spacing.xxsmall,
      },
      lineHeight: lineHeights.medium,
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
          top: spacing.xsmall,
        },
      },
      margin: {
        top: spacing.large,
      },
    },
  },
});

export default CardWeb;
