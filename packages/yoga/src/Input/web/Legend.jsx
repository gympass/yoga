import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

const StyledLegend = styled.legend`
  position: relative;
  padding: 0;
  max-width: 0px;
  width: auto;
  height: 14px;
  font-weight: normal;
  transition: max-width 50ms ease 0;
  visibility: hidden;

  ${({
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) => `
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

const Legend = ({ children, ...props }) => (
  <StyledLegend {...props}>
    <HiddenSpan>{children}</HiddenSpan>
  </StyledLegend>
);

Legend.propTypes = {
  children: node.isRequired,
};

export default Legend;
