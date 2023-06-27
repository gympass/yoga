import styled from 'styled-components';
import { theme } from '@gympass/yoga';
import Dialog from '../../Dialog';

const Content = styled(Dialog.Content)`
  width: 100%;
  height: 100%;

  align-self: flex-start;

  margin: ${theme.spacing.zero};
  padding-left: ${theme.spacing.xxlarge}px;

  text-align: left;
`;

Content.displayName = 'Drawer.Content';

export default Content;
