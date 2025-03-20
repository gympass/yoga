import styled from 'styled-components';
import { bool } from 'prop-types';

const Step = styled.View(
  ({
    active = false,
    theme: {
      yoga: {
        components: { slider },
      },
    },
  }) => `
    background-color: ${
      active
        ? slider.step.backgroundColor.active
        : slider.step.backgroundColor.inactive
    };
    border-radius: ${slider.step.border.radius}px;
    height: 10px;
    width: 10px;
  `,
);

Step.propTypes = {
  active: bool,
};

export default Step;
