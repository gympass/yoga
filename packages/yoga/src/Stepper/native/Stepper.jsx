import React from 'react';
import { View } from 'react-native';
import { node } from 'prop-types';
import styled from 'styled-components';

import customPropType from '../customPropType';
import Line from './Line';
import Dots from './Dots';

const Wrapper = styled.View(
  ({ theme: { spacing } }) => `
  width: 100%;
  padding: 0 ${spacing.xxlarge}px;
`,
);

const Stepper = ({ children, activeStep, ...rest }) => (
  <View {...rest}>
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
  </View>
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
