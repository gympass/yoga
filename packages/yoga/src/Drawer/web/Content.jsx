import styled from 'styled-components';
import { theme } from '@gympass/yoga';
import Dialog from '../../Dialog';

const Content = styled(Dialog.Content)`
  margin: ${theme.spacing.zero};
  height: 100%;
  width: 100%;
  align-self: flex-start;
  text-align: left;
  padding-left: ${theme.spacing.xxlarge}px;
`;

Content.displayName = 'Drawer.Content';

export default Content;
