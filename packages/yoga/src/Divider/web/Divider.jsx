import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../Theme/helpers/themeReader';

const StyledDivider = styled.div`
  ${props => {
    const { borders, colors } = theme(props);

    return css`
      flex: 1;
      height: ${borders.small}px;
      background-color: ${colors.light};
    `;
  }}
`;

const Divider = props => {
  return <StyledDivider {...props} />;
};

Divider.propTypes = {};

Divider.defaultProps = {};

export default Divider;
