import styled from 'styled-components';
import Dialog from '../../Dialog';

const Header = styled(Dialog.Header)`
  ${({
    theme: {
      yoga: { lineHeights, spacing, fontSizes },
    },
  }) => `
    color: #001027;
    line-height: ${lineHeights.medium}px;
    text-align: left;
    align-self: flex-start;
    font-size: ${fontSizes.medium}px;
    margin-bottom: ${spacing.small}px;
  `}
`;

Header.displayName = 'BottomSheet.Header';

export default Header;
