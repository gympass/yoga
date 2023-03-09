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
  animation: content;
  animation-duration: 400ms;
  animation-fill-mode: forwards;
  transition: 0.25s ease-in-out;
  @keyframes content {
    0% {
      transform: translate3d(100%, 0, 0);
    }
  }
`;

function Drawer(props) {
  return <StyledDrawer {...props} />;
}

Drawer.propTypes = {
  children: node.isRequired,
  zIndex: number,
};

Drawer.defaultProps = {
  zIndex: 3,
};

export default Drawer;
