import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

import limitPropType from '../limitPropType';
import Line from './Line';
import Dots from './Dots';

const Wrapper = styled.View`
  width: 100%;
`;

const LineWrapper = styled.View(
  ({ theme: { spacing } }) => `
  width: 100%;
  padding: 0 ${spacing.xxlarge}px;
`,
);

/** Allows the user to navigate between steps relationed to a same context. */
const Stepper = ({ children, activeStep, ...rest }) => (
  <Wrapper {...rest}>
    <LineWrapper>
      <Line
        activeStep={activeStep}
        totalSteps={React.Children.count(children) - 1}
      />
      <Dots
        activeStep={activeStep}
        labels={React.Children.map(children, child => child.props.label)}
      />
    </LineWrapper>
    {children[activeStep]}
  </Wrapper>
);

Stepper.displayName = 'Stepper';

Stepper.propTypes = {
  /** Must be an Stepper.Step component. */
  children: node,
  /** Controls the active step, it receive the index value for showing some step. Starting from 0. */
  activeStep: limitPropType,
};

Stepper.defaultProps = {
  children: undefined,
  activeStep: 0,
};

export default Stepper;
