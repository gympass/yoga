import React from 'react';
import styled from 'styled-components';
import { bool, string, node } from 'prop-types';
import Button from './Button';

const StyledButton = styled(Button)``;

const ButtonLoading = ({
  isLoading,
  loadingLabel,
  children,
  disabled,
  ...props
}) => {
  return (
    <StyledButton isLoading={isLoading} disabled={isLoading} {...props}>
      {isLoading ? loadingLabel : children}
    </StyledButton>
  );
};

ButtonLoading.propTypes = {
  isLoading: bool,
  disabled: bool,
  loadingLabel: string,
  children: node,
};

ButtonLoading.defaultProps = {
  isLoading: false,
  disabled: false,
  loadingLabel: undefined,
  children: 'Button',
};

ButtonLoading.displayName = 'Button.Loading';

export default ButtonLoading;
