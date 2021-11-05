import styled from 'styled-components';

import { margins, paddings } from '@gympass/yoga-system';
import { Card } from '../../Card';

export const Actions = styled(Card.Actions)`
  display: flex;

  margin-left: auto;

  ${margins};
  ${paddings};
`;
