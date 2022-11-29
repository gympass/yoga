const Accordion = ({ spacing, fontSizes, colors }) => ({
  padding: {
    standard: spacing.medium,
    large: spacing.large,
  },
  paddingArrow: {
    total: spacing.xxsmall,
  },
  gap: {
    header: spacing.xxxsmall,
  },
  margin: {
    top: spacing.xxxsmall,
  },
  fontSize: {
    itemList: fontSizes.small,
    marker: fontSizes.xxsmall,
  },
  lineHeight: {
    itemList: fontSizes.large,
  },
  colors: {
    content: colors.text.secundary,
  },
});

export default Accordion;
