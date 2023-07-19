import { number } from 'prop-types';
import styled, { css } from 'styled-components';

const Line = styled.div`
  ${({
    width,
    color,
    theme: {
      yoga: {
        colors: { [color]: customColor },
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

      background-color: ${customColor || stepper.line.backgroundColor.active};
    }
  `}
`;

Line.propTypes = {
  activeStep: number,
  totalSteps: number,
};

Line.defaultProps = {
  activeStep: 0,
  totalSteps: 0,
};

export default Line;
