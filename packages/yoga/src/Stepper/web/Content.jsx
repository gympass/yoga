import React from 'react';
import { node, number } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div(
  ({
    theme: {
      components: { stepper },
    },
  }) => `
  margin-top: ${stepper.content.margin.top}px;
`,
);

const Content = ({ children, activeStep }) => (
  <Wrapper>{children[activeStep]}</Wrapper>
);

Content.propTypes = {
  children: node.isRequired,
  activeStep: number,
};

Content.defaultProps = {
  activeStep: 0,
};

export default Content;
