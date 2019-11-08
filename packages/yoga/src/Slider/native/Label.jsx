import styled from 'styled-components';
import { oneOf } from 'prop-types';

const LabelView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const LabelText = styled.Text(
  ({ placement }) => `
    bottom: 5;
    left: ${placement === 'left' ? -8 : 0}px;
    position: relative;
    text-align: ${placement};
  `,
);

LabelText.propTypes = {
  placement: oneOf(['left', 'right']),
};

LabelText.defaultProps = {
  placement: 'left',
};

export { LabelView, LabelText };
