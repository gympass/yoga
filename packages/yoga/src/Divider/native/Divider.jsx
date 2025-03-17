import { bool } from 'prop-types';
import React from 'react';
import styled, { css, withTheme } from 'styled-components';

const StyledDivider = styled.View`
  ${({
    theme: {
      yoga: { borders, colors },
    },
    vertical,
  }) => {
    return css`
      ${vertical ? 'height: auto' : 'width: auto'};
      ${vertical
        ? `border-left-width: ${borders.small}`
        : `border-bottom-width: ${borders.small}`};

      border-color: ${colors.text.disabled};
    `;
  }}
`;

const Divider = React.forwardRef(({ vertical = false }, ref) => {
  return <StyledDivider vertical={vertical} ref={ref} />;
});

Divider.propTypes = {
  /** If this value is defined, the divider will be in vertical when the flexDirection is row type */
  vertical: bool,
};

export default withTheme(Divider);
