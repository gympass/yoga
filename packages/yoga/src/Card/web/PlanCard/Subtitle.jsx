import styled, { css } from 'styled-components';

import theme from '../../../Theme/helpers/themeReader';
import Text from '../../../Text';

const Subtitle = styled(Text.Tiny)`
  text-transform: uppercase;

  ${(props) => {
    const {
      components: {
        card: { plan },
      },
    } = theme(props);

    return css`
      margin-bottom: ${plan.subtitle.margin.bottom}px;

      color: ${plan.subtitle.font.color};
      font-weight: ${plan.subtitle.font.weight};
    `;
  }}
`;

Subtitle.displayName = 'PlanCard.Subtitle';

export default Subtitle;
