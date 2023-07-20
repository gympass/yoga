import React from 'react';
import { number, arrayOf, string } from 'prop-types';
import styled, { css } from 'styled-components';

import { colors } from '@gympass/yoga-tokens/src/global';
import activeDot from '../activeDot';
import Text from '../../Text';
import { typeOf } from '../../shared';

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

const Label = styled(Text.Bold)`
  ${({
    theme: {
      yoga: {
        components: { stepper },
      },
    },
  }) => css`
    width: 95px;

    font-size: ${stepper.label.font.size}px;

    transform: translateX(-50%);
  `}
`;

const DotWrapper = styled.div`
  ${({
    active,
    color,
    theme: {
      yoga: {
        colors: { [color]: customColor },
        components: { stepper },
      },
    },
  }) => css`
    position: relative;
    width: 15px;

    text-align: center;

    ${Label} {
      position: absolute;
      left: 50%;
      top: 10px;

      color: ${active
        ? customColor || stepper.label.color.active
        : stepper.label.color.inactive};
    }

    ${Dot} {
      position: absolute;
      top: -10px;

      background-color: ${active
        ? customColor || stepper.dot.backgroundColor.active
        : stepper.dot.backgroundColor.inactive};
    }
  `}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Dots = ({ activeStep, labels, color }) => {
  return (
    <Wrapper>
      {labels.map((label, index) => (
        <DotWrapper
          active={activeDot(index, activeStep)}
          color={color}
          key={label}
        >
          <Dot />
          <Label as="span">{label}</Label>
        </DotWrapper>
      ))}
    </Wrapper>
  );
};

Dots.propTypes = {
  activeStep: number,
  labels: arrayOf(string),
  color: typeOf(colors),
};

Dots.defaultProps = {
  activeStep: 0,
  labels: [],
  color: undefined,
};

export default Dots;
