import styled, { css } from 'styled-components';

import theme from '../../../Theme/helpers/themeReader';
import Text from '../../../Text';

const Subtitle = styled(Text.Medium)`
  text-transform: uppercase;

  ${props => {
    const {
      components: {
        card: { plan },
      },
    } = theme(props);

    return css`
      margin-bottom: ${plan.subtitle.margin.bottom}px;

      color: ${plan.subtitle.font.color};
      font-size: ${plan.subtitle.font.size}px;
    `;
  }}
`;

Subtitle.displayName = 'PlanCard.Subtitle';

export default Subtitle;
