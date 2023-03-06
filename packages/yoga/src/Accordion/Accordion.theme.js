const Accordion = ({ spacing, fontWeights, fontSizes }) => ({
  padding: {
    zero: spacing.zero,
    small: spacing.small,
    standard: spacing.medium,
    large: spacing.large,
  },
  paddingArrow: {
    total: spacing.xxsmall,
  },
  gap: {
    header: spacing.xxxsmall,
  },
  fontWeight: {
    medium: fontWeights.medium,
    regular: fontWeights.regular,
  },
  fontSize: {
    medium: fontSizes.medium,
    small: fontSizes.small,
  },
});

export default Accordion;
