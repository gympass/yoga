import styled from 'styled-components';
import Dialog from '../../Dialog';

const Header = styled(Dialog.Header)`
  ${({
    theme: {
      yoga: { lineHeights, spacing, fontSizes, colors },
    },
  }) => `
    color: ${colors.text.primary};
    line-height: ${lineHeights.medium}px;
    font-size: ${fontSizes.medium}px;
    margin-bottom: ${spacing.small}px;
    `}
  align-self: flex-start;
  text-align: left;
`;

Header.displayName = 'BottomSheet.Header';

export default Header;
