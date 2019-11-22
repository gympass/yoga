import { number } from 'prop-types';
import styled from 'styled-components';

const Line = styled.div(
  ({
    width,
    theme: {
      components: { stepper },
    },
  }) => `
    width: 100%;
    height: 4px;

    background-color: ${stepper.line.backgroundColor.inactive};

    &:after {
      display: block;
      content: '';

      width: ${width}%;
      height: 4px;
      
      background-color: ${stepper.line.backgroundColor.active};
    }
  `,
);

Line.propTypes = {
  activeStep: number,
  totalSteps: number,
};

Line.defaultProps = {
  activeStep: 0,
  totalSteps: 0,
};

export default Line;
