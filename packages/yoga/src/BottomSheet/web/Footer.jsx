import styled from 'styled-components';
import Dialog from '../../Dialog';

const Footer = styled(Dialog.Footer)`
  ${({
    theme: {
      yoga: { spacing },
    },
  }) => `
    flex-direction: column;
    margin-left: ${spacing.zero};
    width: 100%;
    gap: ${spacing.small}px;
  `}
`;

Footer.displayName = 'BottomSheet.Footer';

export default Footer;
