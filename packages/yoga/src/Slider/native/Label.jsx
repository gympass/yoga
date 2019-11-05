import styled from 'styled-components';
import { string } from 'prop-types';

const LabelView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const LabelText = styled.Text`
  bottom: 5;
  position: relative;
  ${({ placement }) => `
    left: ${placement === 'left' ? -8 : 0}px;
    text-align: ${placement === 'left' ? 'left' : 'right'};
  `}
`;

LabelText.propTypes = {
  placement: string,
};

LabelText.defaultProps = {
  placement: 'left',
};

export { LabelView, LabelText };
