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
            right: spacing.xsmall,
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
        top: spacing.xxsmall,
      },
    },
  },
});

export default CardWeb;
