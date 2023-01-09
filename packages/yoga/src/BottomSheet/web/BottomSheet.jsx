import React from 'react';
import styled from 'styled-components';
import { node, string } from 'prop-types';
import Dialog from '../../Dialog';

const StyledBottomSheet = styled(Dialog).attrs(({ testId }) => ({
  'data-testid': testId,
}))`
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
  animation: content;
  animation-duration: 400ms;
  animation-fill-mode: forwards;
  @keyframes content {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const BottomSheet = props => <StyledBottomSheet hideCloseButton {...props} />;

BottomSheet.propTypes = {
  children: node.isRequired,
  testId: string,
};

BottomSheet.defaultProps = {
  testId: undefined,
};

export default BottomSheet;
