/**
 *  @typedef {import('@gympass/yoga-tokens/src/global/colors').Colors} Colors
 *  @typedef {import('@gympass/yoga-tokens/src/global/spacing').Spacing} Spacing
 *  @typedef {import('@gympass/yoga-tokens/src/global/radii').Radii} Radii
 *  @typedef {import('@gympass/yoga-tokens/src/global/elevations').Elevation} Elevation
 *  @typedef {import('@gympass/yoga-tokens/src/global/borders').Border} Border
 *  @typedef {import('@gympass/yoga-tokens/src/global/font-weights').FontWeight} FontWeight
 *  @typedef {import('@gympass/yoga-tokens/src/global/font-sizes').FontSize} FontSize
 *  @typedef {import('@gympass/yoga-tokens/src/global/line-heights').LineHeight} LineHeight
 */

/**
 * @param {{
 *  colors: Colors
 *  spacing: Spacing
 *  radii: Radii
 *  elevations: Elevation
 *  borders: Border
 *  fontWeights: FontWeight
 *  fontSizes: FontSize
 *  lineHeights: LineHeight
 * }} props
 */
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
        color: colors.elements.lineAndBorders,
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
      margin: {
        top: spacing.large,
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
    date: {
      backgroundColor: colors.secondary,
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
