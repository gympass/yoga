import React from 'react';
import styled, { css } from 'styled-components';
import { node } from 'prop-types';

import Text from '../../../Text';
import theme from '../../../Theme/helpers/themeReader';

const Wrapper = styled.View`
  position: absolute;
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
    `;
  }}
`;
const StyledText = styled(Text.Medium)`
  ${props => {
    const {
      components: {
        card: { plan },
      },
    } = theme(props);

    return css`
      font-size: ${plan.tag.font.size}px;
      line-height: ${plan.tag.font.height}px;
    `;
  }}
`;

const Tag = ({ children, ...rest }) => (
  <Wrapper {...rest}>
    <StyledText>{children}</StyledText>
  </Wrapper>
);

Tag.propTypes = {
  children: node.isRequired,
};

export default Tag;
