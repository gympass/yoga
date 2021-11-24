import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../Theme/helpers/themeReader';

const StyledDivider = styled.View`
  ${props => {
    const { borders, colors } = theme(props);

    return css`
      height: ${borders.small};
      width: 100%;
      background-color: ${colors.light};
    `;
  }}
`;

const DividerContainer = styled.View`
  flex-direction: row;
`;

const Divider = props => {
  return (
    <DividerContainer>
      <StyledDivider {...props} />
    </DividerContainer>
  );
};

Divider.propTypes = {};

Divider.defaultProps = {};

export default Divider;
