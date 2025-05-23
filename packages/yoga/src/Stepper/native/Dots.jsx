import React from 'react';
import { arrayOf, bool, number, string } from 'prop-types';
import styled, { css } from 'styled-components';

import Text from '../../Text';
import activeDot from '../activeDot';

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const DotWrapper = styled.View`
  width: 15px;
`;

const Dot = styled.View(
  ({
    active,
    secondary,
    theme: {
      yoga: {
        components: { stepper },
      },
    },
  }) => {
    const state = secondary ? 'secondary' : 'active';

    return css`
      width: 15px;
      height: 15px;
      margin-top: -6px;

      border-radius: ${stepper.dot.radius}px;
      background-color: ${active
        ? stepper.dot.backgroundColor[state]
        : stepper.dot.backgroundColor.inactive};
    `;
  },
);

const Label = styled(Text.Overline)(
  ({
    active,
    secondary,
    theme: {
      yoga: {
        components: { stepper },
      },
    },
  }) => {
    const state = secondary ? 'secondary' : 'active';

    return css`
      width: 95px;
      margin-top: 10px;
      margin-left: -40px;
      color: ${active
        ? stepper.label.color[state]
        : stepper.label.color.inactive};
      text-align: center;
    `;
  },
);

function Dots({ activeStep = 0, labels = [], secondary = false }) {
  return (
    <Wrapper>
      {labels.map((label, index) => (
        <DotWrapper key={label}>
          <Dot active={activeDot(index, activeStep)} secondary={secondary} />
          <Label active={activeDot(index, activeStep)} secondary={secondary}>
            {label}
          </Label>
        </DotWrapper>
      ))}
    </Wrapper>
  );
}

Dots.propTypes = {
  activeStep: number,
  labels: arrayOf(string),
  secondary: bool,
};

export default Dots;
