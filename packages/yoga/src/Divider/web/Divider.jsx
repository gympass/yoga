import { bool, shape } from 'prop-types';
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
      border-top-width: ${vertical ? 0 : borders.small}px;
      border-color: ${colors.text.disabled};
      border-style: solid;
    `;
  }}
`;

const Divider = React.forwardRef(
  ({ vertical = false, style, ...props }, ref) => {
    return (
      <StyledDivider vertical={vertical} ref={ref} style={style} {...props} />
    );
  },
);

Divider.propTypes = {
  /** If this value is defined, the divider will be in vertical if the flexDirection is row type */
  vertical: bool,
  style: shape({}),
};

export default withTheme(Divider);
