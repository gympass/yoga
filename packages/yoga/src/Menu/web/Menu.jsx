import React, { useCallback, useEffect, useReducer, Children } from 'react';
import styled from 'styled-components';
import { func, bool, node } from 'prop-types';
import { useKeyPress } from '../../hooks';

const StyledMenu = styled.div`
  ${({
    state,
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

    span {
      background: ${state.selectedIndex ? 'red' : 'black'};
      width: 100%;
    }
  `}
`;

const initialState = {
  selectedIndex: 0,
};
const Menu = ({ isOpen, onClose, children }) => {
  const countArray = Children.toArray(children).length;

  const arrowUpPressed = useKeyPress('ArrowUp');
  const arrowDownPressed = useKeyPress('ArrowDown');

  function reducer(state, action) {
    switch (action.type) {
      case 'arrowUp':
        return {
          selectedIndex:
            state.selectedIndex !== 0
              ? state.selectedIndex - 1
              : countArray - 1,
        };
      case 'arrowDown':
        return {
          selectedIndex:
            state.selectedIndex !== countArray - 1
              ? state.selectedIndex + 1
              : 0,
        };
      default:
        return null;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

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

  useEffect(() => {
    if (arrowUpPressed) {
      dispatch({
        type: 'arrowUp',
      });
    }
  }, [arrowUpPressed]);

  useEffect(() => {
    if (arrowDownPressed) {
      dispatch({
        type: 'arrowDown',
      });
    }
  }, [arrowDownPressed]);

  return (
    isOpen && (
      <StyledMenu state={state} tabIndex={0} isOpen={isOpen} onClose={onClose}>
        <span>{children}</span>
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
