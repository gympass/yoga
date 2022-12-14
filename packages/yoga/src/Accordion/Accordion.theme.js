const Accordion = ({ spacing, fontWeights }) => ({
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
  fontWeight: {
    title: fontWeights.medium,
  },
});

export default Accordion;
