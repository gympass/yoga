const CardWeb = ({ spacing }) => ({
  plan: {
    title: {
      margin: {
        bottom: spacing.xxxsmall,
      },
    },
    price: {
      margin: {
        bottom: spacing.xlarge,
      },
    },
    list: {
      margin: {
        top: spacing.small,
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
        top: spacing.xlarge,
      },
    },
  },
});

export default CardWeb;
