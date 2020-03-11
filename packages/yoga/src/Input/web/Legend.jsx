import React from 'react';
import styled from 'styled-components';
import { bool, node } from 'prop-types';

const StyledLegend = styled.legend`
  visibility: hidden;
  position: relative;
  max-width: 0.01px;
  width: auto;
  height: 14px;
  padding: 0;
  font-weight: normal;

  transition: max-width ease 50ms;

  ${({
    typed,
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) => `
    max-width: ${typed ? '1000' : '0.01'}px;

    font-size: ${input.label.font.size.typed}px;
    letter-spacing: normal;
  `}
`;

const HiddenSpan = styled.span`
  ${({
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) => `
    padding-left: ${input.label.padding.left}px;
    padding-right: ${input.label.padding.right}px;
  `}
`;

const Legend = ({ children, typed, ...props }) => (
  <StyledLegend typed={typed} {...props}>
    <HiddenSpan>{children}</HiddenSpan>
  </StyledLegend>
);

Legend.propTypes = {
  children: node.isRequired,
  typed: bool,
};

Legend.defaultProps = {
  typed: undefined,
};

export default Legend;
