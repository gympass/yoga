import React from 'react';
import styled from 'styled-components';

import { colors } from '@gympass/yoga-tokens/src/global';
import { limitChildren, typeOf } from '../../shared';
import Line from './Line';
import Dots from './Dots';
import Step from './Step';

const Wrapper = styled.View`
  width: 100%;
`;

const LineWrapper = styled.View(
  ({
    theme: {
      yoga: {
        components: { stepper },
      },
    },
  }) => `
  width: 100%;
  padding: 0 ${stepper.padding.right}px 0 ${stepper.padding.left}px;
`,
);

/** Stepper is responsible for the logic that drives a stepped workflow, it
provides a wizard-like workflow by dividing content into logical steps. */
const Stepper = ({ children, activeStep, color, ...rest }) => (
  <Wrapper {...rest}>
    <LineWrapper>
      <Line
        activeStep={activeStep}
        totalSteps={React.Children.count(children) - 1}
        color={color}
      />
      <Dots
        activeStep={activeStep}
        labels={React.Children.map(children, child => child.props.label)}
        color={color}
      />
    </LineWrapper>
    {React.Children.toArray(children)[activeStep]}
  </Wrapper>
);

Stepper.displayName = 'Stepper';

Stepper.propTypes = {
  /** Must be a Stepper.Step component. */
  children: typeOf(Step),
  /** Controls the active step, it receive the index value for showing some
   * step. Starting from 0. */
  activeStep: limitChildren,
  /** Must be a color from yoga colors. */
  color: typeOf(colors),
};

Stepper.defaultProps = {
  children: undefined,
  activeStep: 0,
  color: undefined,
};

export default Stepper;
