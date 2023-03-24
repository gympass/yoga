import React from 'react';
import styled from 'styled-components';
import { node, number } from 'prop-types';
import { theme } from '@gympass/yoga';
import Dialog from '../../Dialog';

const StyledDrawer = styled(Dialog)`
  position: absolute;
  right: 0;

  align-self: flex-end;

  height: 100%;
  padding: ${theme.spacing.zero};
  border-radius: ${theme.borders.zero};

  transition: 0.25s ease-in-out;

  animation: content;
  animation-duration: 400ms;
  animation-fill-mode: forwards;

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
