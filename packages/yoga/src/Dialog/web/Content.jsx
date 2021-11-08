import styled from 'styled-components';

import { Card } from '../..';
import { theme } from '../../Theme';

const Content = styled(Card.Content)`
  margin-top: ${theme.spacing.large}px;
  margin-bottom: ${theme.spacing.xlarge}px;
`;

Content.displayName = 'Dialog.Content';

export default Content;
