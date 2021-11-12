import styled from 'styled-components';
import Dialog from '../../Dialog';

const Content = styled(Dialog.Content)`
  ${({
    theme: {
      yoga: { fontWeights, colors, lineHeights, spacing, fontSizes },
    },
  }) => `
    font-weight: ${fontWeights.regular};
    color: ${colors.text.secondary};
    line-height: ${lineHeights.small}px;
    margin-bottom: ${spacing.medium}px;
    font-size: ${fontSizes.small}px;
    align-self: flex-start;
    text-align: left;
  `}
`;

Content.displayName = 'BottomSheet.Content';

export default Content;
