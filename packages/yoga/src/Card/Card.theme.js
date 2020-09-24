const Card = ({
  colors,
  spacing,
  radii,
  elevations,
  borders,
  fontWeights,
  fontSizes,
  lineHeights,
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
    padding: {
      top: spacing.xxxlarge,
      right: spacing.medium,
      bottom: spacing.xlarge,
      left: spacing.medium,
    },
    radius: 16,
    tag: {
      radius: radii.semiRounded,
      position: {
        top: spacing.medium,
        left: spacing.medium,
      },
      padding: {
        right: spacing.xxsmall,
        left: spacing.xxsmall,
      },
      border: {
        width: borders.small,
        color: colors.gray[7],
      },
      font: {
        size: fontSizes.xsmall,
        height: lineHeights.xsmall,
        weight: fontWeights.medium,
      },
    },
    subtitle: {
      margin: {
        bottom: spacing.xxsmall,
      },
      font: {
        color: colors.gray[8],
        weight: fontWeights.medium,
        size: fontSizes.xsmall,
      },
    },
    title: {
      color: '#001027',
      margin: {
        bottom: spacing.xxxsmall,
      },
    },
    description: {
      color: colors.gray[8],
    },
    price: {
      currency: {
        margin: {
          right: spacing.xxxsmall,
        },
      },
      margin: {
        top: spacing.xlarge,
        bottom: spacing.xxlarge,
      },
    },
    list: {
      margin: {
        top: spacing.small,
      },
      item: {
        margin: {
          bottom: spacing.small,
        },
        font: {
          size: fontSizes.small,
          color: '#001027',
        },
        icon: {
          margin: {
            right: spacing.xsmall,
          },
        },
      },
      button: {
        font: {
          color: colors.secondary[3],
          size: fontSizes.xsmall,
          weight: fontWeights.medium,
        },
        margin: {
          top: spacing.xsmall,
        },
      },
    },
    actions: {
      margin: {
        top: spacing.large,
      },
    },
    colors: {
      vibin: '#D8385E',
      hope: '#1D856C',
      verve: '#FF874C',
      light: '#D7D7E0',
      energy: '#FFC24C',
      medium: '#6B6B78',
      stamina: '#231B22',
      relax: '#7068D4',
      deep: '#710252',
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
        fontSize: fontSizes.medium,
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
