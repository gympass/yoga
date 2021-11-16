import styled from 'styled-components';
import Dialog from '../../Dialog';

const Footer = styled(Dialog.Footer)`
  ${({
    theme: {
      yoga: { spacing },
    },
  }) => `
  margin-left: ${spacing.zero};
  gap: ${spacing.small}px;
  `}
  flex-direction: column;
  width: 100%;
`;

Footer.displayName = 'BottomSheet.Footer';

export default Footer;
