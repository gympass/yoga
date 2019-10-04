import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

/** This is a Buttton description */
const ButtonStyle = styled.button`
  display: inline-flex;
  align-items: center;
  height: 48px;
  padding: 0 40px;
  border-radius: 24px;
  border: none;
  color: #fff;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 100ms linear;
  outline: none;

  background-color: ${({ theme }) => theme.components.button.backgroundColor};
  box-shadow: ${({ theme }) => theme.components.button.shadow};

  &:hover {
    box-shadow: ${({ theme }) => theme.components.button.hover.shadow};
    transform: translateY(-3px);
  }
  &:active {
    box-shadow: ${({ theme }) => theme.components.button.active.shadow};
    transform: translateY(-1px);
    transition: all 30ms linear;
  }
  &:disabled {
    background-color: #ccc;
    box-shadow: none;
  }
`;

/** This is a Buttton description */
const Button = ({ text, children, theme }) => {
  console.log(theme.components.button.backgroundColor);
  return <ButtonStyle text={text}> {children} </ButtonStyle>;
};

Button.propTypes = {
  /** A text */
  text: PropTypes.string,
  /** Component children */
  children: PropTypes.node,
};

Button.defaultProps = {
  text: 'alo',
  children: undefined,
};

export default withTheme(Button);
