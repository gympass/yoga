import React from 'react';
import styled, { css } from 'styled-components';

import { bool } from 'prop-types';
import { limitChildren, typeOf } from '../../shared';
import Dots from './Dots';
import Line from './Line';
import Step from './Step';

const Root = styled.div`
  width: 100%;

  * {
    box-sizing: border-box;
  }
`;

const LineWrapper = styled.div`
  ${({
    theme: {
      yoga: {
        components: { stepper },
      },
    },
  }) => css`
    width: 100%;
    height: 46px;

    padding: 0 ${stepper.padding.right}px 0 ${stepper.padding.left}px;
  `}
`;

/** Stepper is responsible for the logic that drives a stepped workflow, it
provides a wizard-like workflow by dividing content into logical steps. */
function Stepper({ children, activeStep = 0, secondary = false, ...rest }) {
  return (
    <Root {...rest}>
      <LineWrapper>
        <Line
          width={
            activeStep <= 0
              ? 0
              : (activeStep / (React.Children.count(children) - 1)) * 100
          }
          secondary={secondary}
        />
        <Dots
          activeStep={activeStep}
          labels={React.Children.map(children, child => child.props.label)}
          secondary={secondary}
        />
      </LineWrapper>
      {React.Children.toArray(children)[activeStep]}
    </Root>
  );
}

Stepper.displayName = 'Stepper';

Stepper.propTypes = {
  /** Must be a Stepper.Step component. */
  children: typeOf(Step),
  /** Controls the active step, it receive the index value for showing some
   * step. Starting from 0. */
  activeStep: limitChildren,
  secondary: bool,
};
export default Stepper;
