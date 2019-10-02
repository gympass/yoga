import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  height: 48px;
  margin-top: 24px;
  padding: 0 40px;
  border-radius: 24px;
  border: none;
  background-color: ${({ theme }) => theme.components.button.backgroundColor};
  color: #fff;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 100ms linear;
  outline: none;

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

Button.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  text: 'Gympass',
  children: undefined,
};

export default Button;
