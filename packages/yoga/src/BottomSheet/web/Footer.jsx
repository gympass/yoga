import styled from 'styled-components';
import Dialog from '../../Dialog';

const Footer = styled(Dialog.Footer)`
  flex-direction: column;
  margin-left: 0;
  width: 100%;
  gap: 16px;
`;

Footer.displayName = 'BottomSheet.Footer';

export default Footer;
