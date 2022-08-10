import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';
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
  width: ${drawer.width.default}px;
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

const Drawer = props => <StyledDrawer {...props} />;

Drawer.propTypes = {
  children: node.isRequired,
};

export default Drawer;
