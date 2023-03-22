import React from 'react';
import styled from 'styled-components';
import { node, number } from 'prop-types';
import Dialog from '../../Dialog';

const StyledDrawer = styled(Dialog)`
  border-radius: 0 !important;
  height: 100%;
  align-self: flex-end;
  position: absolute;
  right: 0;
  animation: content;
  animation-duration: 400ms;
  animation-fill-mode: forwards;
  transition: 0.25s ease-in-out;

  padding: 16px 16px 40px 40px;

  ${({
    theme: {
      yoga: {
        components: { drawer },
      },
    },
  }) => `
    width: min(${drawer.width.default}px, 100%);
  `}

  @keyframes content {
    0% {
      transform: translate3d(100%, 0, 0);
    }
  }
`;

const Drawer = React.forwardRef((props, forwardedRef) => (
  <StyledDrawer {...props} ref={forwardedRef} />
));

Drawer.propTypes = {
  children: node.isRequired,
  zIndex: number,
};

Drawer.defaultProps = {
  zIndex: 3,
};

export default Drawer;
