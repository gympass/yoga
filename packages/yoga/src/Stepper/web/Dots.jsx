import React from 'react';
import { arrayOf, bool, number, string } from 'prop-types';
import styled, { css } from 'styled-components';

import Text from '../../Text';
import activeDot from '../activeDot';

const Dot = styled.div`
  ${({
    theme: {
      yoga: {
        components: { stepper },
      },
    },
  }) => css`
    width: 15px;
    height: 15px;

    border-radius: ${stepper.dot.radius}px;
  `}
`;

const Label = styled(Text.Overline)`
  width: 95px;

  transform: translateX(-50%);
`;

const DotWrapper = styled.div`
  ${({
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
      position: relative;
      width: 15px;

      text-align: center;

      ${Label} {
        position: absolute;
        left: 50%;
        top: 10px;

        color: ${active
          ? stepper.label.color[state]
          : stepper.label.color.inactive};
      }

      ${Dot} {
        position: absolute;
        top: -10px;

        background-color: ${active
          ? stepper.dot.backgroundColor[state]
          : stepper.dot.backgroundColor.inactive};
      }
    `;
  }}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Dots({ activeStep = 0, labels = [], secondary = false }) {
  return (
    <Wrapper>
      {labels.map((label, index) => (
        <DotWrapper
          active={activeDot(index, activeStep)}
          secondary={secondary}
          key={label}
        >
          <Dot />
          <Label as="span">{label}</Label>
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
