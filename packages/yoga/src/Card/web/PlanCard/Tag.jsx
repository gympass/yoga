import styled, { css } from 'styled-components';

import theme from '../../../Theme/helpers/themeReader';

const Tag = styled.span`
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;

  ${props => {
    const {
      components: {
        card: { plan },
      },
    } = theme(props);

    return css`
      top: ${plan.tag.position.top}px;
      left: ${plan.tag.position.left}px;

      padding-left: ${plan.tag.padding.left}px;
      padding-right: ${plan.tag.padding.right}px;

      border: ${plan.tag.border.width}px solid ${plan.tag.border.color};
      border-radius: ${plan.tag.radius}px;

      font-size: ${plan.tag.font.size}px;
      line-height: ${plan.tag.font.lineHeight}px;
      font-weight: ${plan.tag.font.weight};
    `;
  }}
`;

export default Tag;
