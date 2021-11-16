import React from 'react';
import styled from 'styled-components';
import { bool, node } from 'prop-types';
import Dialog from '../../Dialog';
import { StyledDialog } from '../../Dialog/web/Dialog';

const StyledBottomSheet = styled(Dialog)`
  ${({
    theme: {
      yoga: {
        components: { bottomsheet },
      },
    },
  }) => `
    align-items: end;

    ${StyledDialog} {
      padding: ${bottomsheet.padding.top}px ${bottomsheet.padding.right}px ${bottomsheet.padding.bottom}px ${bottomsheet.padding.left}px;
      width: ${bottomsheet.width.default}%;
      border-radius: ${bottomsheet.border.radius}px ${bottomsheet.border.radius}px 0 0;
    }
    
    animation: content;
    animation-duration: 1s;
    animation-fill-mode: forwards;

    @keyframes content {
      0% {
        bottom: -50rem;
      }
      100% {
        bottom: 0;
      }
    }
  `}
`;

const BottomSheet = props => <StyledBottomSheet {...props} />;

BottomSheet.propTypes = {
  /** Control bottom sheet's visibility. */
  isOpen: bool,

  children: node.isRequired,
};

BottomSheet.defaultProps = {
  isOpen: false,
};

export default BottomSheet;
