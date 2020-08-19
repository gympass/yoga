const Card = ({
  colors,
  spacing,
  radii,
  elevations,
  borders,
  fontWeights,
}) => ({
  backgroundColor: colors.white,
  padding: {
    top: spacing.small,
    right: spacing.small,
    bottom: spacing.small,
    left: spacing.small,
  },
  radii: radii.rounded,
  elevation: elevations.small,
  ribbon: {
    radius: radii.circle,
  },
  plan: {
    title: {
      margin: {
        top: spacing.xxsmall,
        bottom: spacing.xsmall,
      },
    },
    price: {
      margin: {
        top: spacing.xsmall,
      },
    },
    period: {
      margin: {
        bottom: spacing.xxsmall,
      },
    },
  },
  gym: {
    checkIn: {
      header: {
        margin: {
          bottom: spacing.small,
        },
      },
      avatar: {
        border: {
          radius: radii.rounded,
          width: borders.small,
        },
      },
      content: {
        margin: {
          top: spacing.small,
        },
      },
      title: {
        font: {
          weight: fontWeights.regular,
        },
        margin: {
          bottom: spacing.xxsmall,
        },
      },
    },
  },
  event: {
    icon: {
      fill: colors.dark,
    },
    info: {
      padding: {
        top: spacing.small,
        right: spacing.small,
        left: spacing.small,
        bottom: spacing.small,
      },
      name: {
        height: spacing.medium,
        fontWeight: fontWeights.medium,
        marginBottom: spacing.xxsmall,
      },
      place: {
        height: spacing.medium,
        color: colors.gray[8],
        marginBottom: spacing.xxsmall,
      },
    },
    date: {
      radius: radii.rounded,
      dayOfWeek: {
        fontWeight: fontWeights.regular,
        marginBottom: spacing.xxsmall,
      },
      month: {
        fontWeight: fontWeights.medium,
      },
    },
  },
});

export default Card;
