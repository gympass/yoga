import { bool } from 'prop-types';
import React from 'react';
import styled, { css, withTheme } from 'styled-components';

const StyledDivider = styled.hr`
  ${({
    vertical,
    theme: {
      yoga: { borders, colors },
    },
  }) => {
    return css`
      ${vertical ? 'height: auto' : 'width: 100%'};
      border-width: 0px;
      border-left-width: ${vertical ? borders.small : 0}px;
      border-bottom-width: ${vertical ? 0 : borders.small}px;
      border-color: ${colors.text.disabled};
    `;
  }}
`;

const Divider = (props) => {
  const { vertical } = props;

  return <StyledDivider vertical={vertical} />;
};

Divider.propTypes = {
  /** If this value is defined, the divider will be in vertical if the flexDirection is row type */
  vertical: bool,
};

Divider.defaultProps = {
  vertical: false,
};

export default withTheme(Divider);
