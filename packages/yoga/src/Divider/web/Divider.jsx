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
      border-width: ${borders.zero};
      border-left-width: ${vertical ? borders.small : 0}px;
      border-bottom-width: ${vertical ? 0 : borders.small}px;
      border-color: ${colors.text.disabled};
    `;
  }}
`;

const Divider = React.forwardRef(({ vertical, style, ...props }, ref) => {
  return (
    <StyledDivider vertical={vertical} ref={ref} style={style} {...props} />
  );
});

Divider.propTypes = {
  /** If this value is defined, the divider will be in vertical if the flexDirection is row type */
  vertical: bool,
  style: shape({}),
};

Divider.defaultProps = {
  vertical: false,
  style: undefined,
};

export default withTheme(Divider);
