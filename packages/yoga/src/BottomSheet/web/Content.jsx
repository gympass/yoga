import styled from 'styled-components';
import Dialog from '../../Dialog';

const Content = styled(Dialog.Content)`
  ${({
    theme: {
      yoga: { fontWeights, colors, lineHeights, spacing, fontSizes },
    },
  }) => `
    font-weight: ${fontWeights.regular};
    color: ${colors.deep};
    line-height: ${lineHeights.small}px;
    margin-bottom: ${spacing.medium}px;
    font-size: ${fontSizes.small}px;
    text-align: left;
  `}
`;

Content.displayName = 'BottomSheet.Content';

export default Content;
