import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { func, bool, node } from 'prop-types';

const StyledMenu = styled.div`
  ${({
    theme: {
      yoga: {
        colors,
        components: { menu },
      },
    },
  }) => `
    background: ${colors.white};
    border-radius: ${menu.border.radius}px;
    margin: ${menu.margin.default}px 0; 
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: ${menu.width.min}px;
    max-width: ${menu.width.max}px;
    box-shadow: 0px 2px 6px rgba(152, 152, 166, 0.25);
  `}
`;

const Menu = ({ isOpen, onClose, children }) => {
  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && isOpen && onClose) {
        onClose(e);
      }
      return true;
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);

    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    isOpen && (
      <StyledMenu isOpen={isOpen} onClose={onClose}>
        {children}
      </StyledMenu>
    )
  );
};

Menu.propTypes = {
  /** Control the dialog visibility. */
  isOpen: bool,

  /** Function to close the dialog. */
  onClose: func,

  /** The children necessary */
  children: node.isRequired,
};

Menu.defaultProps = {
  isOpen: true,
  onClose: undefined,
};

Menu.displayName = 'Menu';

export default Menu;
