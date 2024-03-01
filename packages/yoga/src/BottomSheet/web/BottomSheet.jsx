import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';
import Dialog from '../../Dialog';

const StyledBottomSheet = styled(Dialog)`
  ${({
    theme: {
      yoga: {
        components: { bottomsheet },
      },
    },
  }) => `
  padding: ${bottomsheet.padding.top}px ${bottomsheet.padding.right}px ${bottomsheet.padding.bottom}px ${bottomsheet.padding.left}px;
  width: ${bottomsheet.width.default}%;
  border-radius: ${bottomsheet.border.radius}px ${bottomsheet.border.radius}px 0 0;
  `}
  align-self: flex-end;
  animation: updown;
  animation-duration: 400ms;
  animation-fill-mode: forwards;
  @keyframes updown {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const BottomSheet = React.forwardRef((props, forwardedRef) => (
  <StyledBottomSheet hideCloseButton {...props} ref={forwardedRef} />
));

BottomSheet.propTypes = {
  children: node.isRequired,
};

export default BottomSheet;
