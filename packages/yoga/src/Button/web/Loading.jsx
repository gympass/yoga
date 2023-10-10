import React from 'react';
import { bool, string, node } from 'prop-types';
import Button from './Button';
import ButtonOutline from './Outline';
import ButtonIcon from './Icon';

const ButtonLoading = ({
  isLoading,
  loadingLabel,
  children,
  disabled,
  variant,
  ...props
}) => {
  const commonProps = {
    isLoading,
    disabled: isLoading,
    ...props,
  };

  const variantToComponent = {
    outline: ButtonOutline,
    icon: ButtonIcon,
  };

  const ButtonComponent = variantToComponent[variant] || Button;

  return (
    <ButtonComponent {...commonProps}>
      {isLoading ? loadingLabel : children}
    </ButtonComponent>
  );
};

ButtonLoading.propTypes = {
  isLoading: bool,
  disabled: bool,
  loadingLabel: string,
  children: node,
  variant: string,
};

ButtonLoading.defaultProps = {
  isLoading: false,
  disabled: false,
  loadingLabel: undefined,
  children: 'Button',
  variant: 'default',
};

ButtonLoading.displayName = 'Button.Loading';

export default ButtonLoading;
