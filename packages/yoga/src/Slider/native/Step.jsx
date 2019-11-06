import styled from 'styled-components';
import { bool } from 'prop-types';

const Step = styled.View(
  ({
    active,
    theme: {
      components: {
        slider: {
          step: {
            backgroundColor: {
              active: activeBackgroundColor,
              inactive: inactiveBackgroundColor,
            },
            border: { radius },
          },
        },
      },
    },
  }) => `
    background-color: ${
      active ? activeBackgroundColor : inactiveBackgroundColor
    };
    border-radius: ${radius}px;
    height: 10px;
    width: 10px;
  `,
);

Step.propTypes = {
  active: bool,
};

Step.defaultProps = {
  active: false,
};

export default Step;
