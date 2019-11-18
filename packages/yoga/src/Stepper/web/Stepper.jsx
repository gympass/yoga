import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

import customPropType from '../customPropType';
import Dots from './Dots';
import Line from './Line';

const Wrapper = styled.div(
  ({ theme: { spacing } }) => `
  width: 100%;
  height: 46px;

  padding: 0 ${spacing.xxlarge}px;
`,
);

const Stepper = ({ children, activeStep, ...rest }) => (
  <div {...rest}>
    <Wrapper>
      <Line
        activeStep={activeStep}
        totalSteps={React.Children.count(children) - 1}
      />
      <Dots
        activeStep={activeStep}
        labels={React.Children.map(children, child => child.props.label)}
      />
    </Wrapper>
    {children[activeStep]}
  </div>
);

Stepper.displayName = 'Stepper';

Stepper.propTypes = {
  children: node.isRequired,
  activeStep: customPropType,
};

Stepper.defaultProps = {
  activeStep: 0,
};

export default Stepper;
