import styled from 'styled-components';
import Dialog from '../../Dialog';

const Content = styled(Dialog.Content)`
  margin: 0;
  height: 100%;
  width: 100%;
  align-self: flex-start;
  text-align: left;
`;

Content.displayName = 'Drawer.Content';

export default Content;
