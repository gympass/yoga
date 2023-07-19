import React from 'react';
import { number } from 'prop-types';
import styled from 'styled-components';
import { colors } from '@gympass/yoga-tokens/src/global';
import { typeOf } from '../../shared';

const Wrapper = styled.View`
  position: relative;
`;

const InactiveLine = styled.View(
  ({
    theme: {
      yoga: {
        components: { stepper },
      },
    },
  }) => `
  width: 100%;
  height: 4px;

  position: absolute;
  top: 0;

  background-color: ${stepper.line.backgroundColor.inactive};
`,
);

const ActiveLine = styled.View(
  ({
    width,
    color,
    theme: {
      yoga: {
        colors: { [color]: customColor },
        components: { stepper },
      },
    },
  }) => `
    position: absolute;
    top: 0;

    background-color: ${customColor || stepper.line.backgroundColor.active};
    width: ${width}%;
    height: 4px;
`,
);

const Line = ({ activeStep, totalSteps, color }) => (
  <Wrapper>
    <InactiveLine />
    <ActiveLine
      width={activeStep <= 0 ? 0 : (activeStep / totalSteps) * 100}
      color={color}
    />
  </Wrapper>
);

Line.propTypes = {
  activeStep: number,
  totalSteps: number,
  color: typeOf(colors),
};

Line.defaultProps = {
  activeStep: 0,
  totalSteps: 0,
  color: undefined,
};

export default Line;
