const Card = ({
  colors,
  spacing,
  radii,
  elevations,
  borders,
  fontWeights,
  fontSizes,
}) => ({
  backgroundColor: colors.white,
  padding: {
    top: spacing.small,
    right: spacing.small,
    bottom: spacing.small,
    left: spacing.small,
  },
  radii: radii.small,
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
      position: {
        top: spacing.medium,
        left: spacing.medium,
      },
    },
    subtitle: {
      margin: {
        bottom: spacing.xxsmall,
      },
      font: {
        color: colors.text.secondary,
        weight: fontWeights.medium,
        size: fontSizes.xsmall,
      },
    },
    title: {
      color: colors.text.primary,
      margin: {
        bottom: spacing.xxxsmall,
      },
    },
    description: {
      color: colors.text.secondary,
    },
    price: {
      currency: {
        margin: {
          right: spacing.xxxsmall,
        },
      },
      margin: {
        top: spacing.small,
        bottom: spacing.xlarge,
      },
    },
    list: {
      height: 92,
      margin: {
        top: spacing.small,
      },
      item: {
        margin: {
          bottom: spacing.small,
        },
        font: {
          color: colors.text.primary,
        },
        icon: {
          margin: {
            right: spacing.xsmall,
          },
        },
      },
      button: {
        font: {
          color: colors.secondary,
          size: fontSizes.xsmall,
          weight: fontWeights.medium,
        },
        margin: {
          top: spacing.xsmall,
        },
      },
    },
    actions: {
      buttonText: {
        margin: {
          top: spacing.xsmall,
          bottom: spacing.zero,
        },
      },
      margin: {
        top: spacing.xlarge,
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
          radius: radii.small,
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
    radii: radii.regular,
    icon: {
      fill: colors.text.primary,
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
        color: colors.text.secondary,
        marginBottom: spacing.xxsmall,
      },
    },
    indicator: {
      size: spacing.xxsmall,
      marginBottom: spacing.xxsmall,
      backgroundColor: {
        disabled: colors.light,
        default: colors.primary,
        active: colors.white,
      },
    },
    date: {
      backgroundColor: {
        default: colors.white,
        active: colors.primary,
      },
      radius: radii.small,
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
