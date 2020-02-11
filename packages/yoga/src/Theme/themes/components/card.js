const card = ({
  colors,
  spacing,
  radii,
  elevations,
  borders,
  fontWeights,
}) => ({
  backgroundColor: colors.white,
  padding: {
    top: spacing.medium,
    right: spacing.medium,
    bottom: spacing.medium,
    left: spacing.medium,
  },
  radii: radii.rounded,
  elevation: elevations.small,
  ribbon: {
    radius: radii.circle,
  },
  plan: {
    title: {
      margin: {
        top: spacing.xsmall,
        bottom: spacing.small,
      },
    },
    price: {
      margin: {
        top: spacing.small,
      },
    },
    period: {
      margin: {
        bottom: spacing.xsmall,
      },
    },
  },
  gym: {
    checkIn: {
      header: {
        margin: {
          bottom: spacing.medium,
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
          top: spacing.medium,
        },
      },
      title: {
        font: {
          weight: fontWeights.regular,
        },
        margin: {
          bottom: spacing.xsmall,
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
        top: spacing.medium,
        right: spacing.medium,
        left: spacing.medium,
        bottom: spacing.medium,
      },
      name: {
        height: spacing.large,
        fontWeight: fontWeights.semibold,
        marginBottom: spacing.xsmall,
      },
      place: {
        height: spacing.large,
        color: colors.gray[8],
        marginBottom: spacing.xsmall,
      },
    },
    date: {
      radius: radii.rounded,
      dayOfWeek: {
        fontWeight: fontWeights.regular,
        marginBottom: spacing.xsmall,
      },
      month: {
        fontWeight: fontWeights.semibold,
      },
    },
  },
});

export default card;
