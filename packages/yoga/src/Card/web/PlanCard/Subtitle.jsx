import styled from 'styled-components';

import theme from '../../../Theme/helpers/themeReader';
import Text from '../../../Text';

const Subtitle = styled(Text.Tiny)`
  margin-bottom: 8px;

  color: ${theme.components.card.plan.subtitle.color};
  font-weight: 500;

  text-transform: uppercase;
`;

Subtitle.displayName = 'PlanCard.Subtitle';

export default Subtitle;
