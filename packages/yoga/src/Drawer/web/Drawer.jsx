import React from 'react';
import styled from 'styled-components';
import { node, number } from 'prop-types';
import Dialog from '../../Dialog';

const StyledDrawer = styled(Dialog)`
  ${({
    theme: {
      yoga: {
        components: { drawer },
      },
    },
  }) => `
  padding: ${drawer.padding.top}px ${drawer.padding.right}px ${drawer.padding.bottom}px ${drawer.padding.left}px;
  width: min(${drawer.width.default}px, 100%);
  `}
  border-radius: 0!important;
  height: 100%;
  align-self: flex-end;
  position: absolute;
  right: 0;
  animation: drawer-slide-left;
  animation-duration: 400ms;
  animation-fill-mode: forwards;
  transition: 0.25s ease-in-out;
  @keyframes drawer-slide-left {
    0% {
      transform: translate3d(100%, 0, 0);
    }
  }
`;

const Drawer = React.forwardRef(({ zIndex = 3, ...rest }, forwardedRef) => (
  <StyledDrawer {...rest} zIndex={zIndex} ref={forwardedRef} />
));

Drawer.propTypes = {
  children: node.isRequired,
  zIndex: number,
};

export default Drawer;
