import { number } from 'prop-types';
import styled, { css } from 'styled-components';

const Line = styled.div`
  ${({
    width,
    secondary,
    theme: {
      yoga: {
        components: { stepper },
      },
    },
  }) => css`
    width: 100%;
    height: 4px;

    background-color: ${stepper.line.backgroundColor.inactive};

    &:after {
      display: block;
      content: '';

      width: ${width}%;
      height: 4px;

      background-color: ${secondary
        ? stepper.line.backgroundColor.secondary
        : stepper.line.backgroundColor.active};
    }
  `}
`;

Line.propTypes = {
  activeStep: number,
  totalSteps: number,
};

export default Line;
