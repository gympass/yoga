import React, { forwardRef } from 'react';
import { func, node, oneOfType, bool, string } from 'prop-types';
import styled from 'styled-components';
import StyledButton from './StyledButton';
import Spinner from '../../Spinner';

const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const noop = () => {};

/** Buttons make common actions more obvious and help users more easily perform them. Buttons use labels and sometimes icons to communicate the action that will occur when the user touches them. */
const Button = forwardRef(
  (
    {
      children = 'Button',
      onClick = noop,
      full = false,
      disabled = undefined,
      inverted = false,
      small = false,
      secondary = false,
      icon: Icon,
      isLoading = false,
      'aria-label': ariaLabel,
      ...props
    },
    ref,
  ) => {
    const finalProps = {
      ...props,
    };

    if (props.href) {
      finalProps.as = 'a';
    }

    return (
      <StyledButton
        ref={ref}
        disabled={disabled || isLoading}
        aria-disabled={disabled}
        full={full}
        inverted={inverted}
        onClick={onClick}
        small={small}
        secondary={secondary}
        isLoading={isLoading}
        aria-label={ariaLabel}
        {...finalProps}
      >
        {Icon && <Icon role="img" />}
        {children}

        {isLoading && (
          <SpinnerContainer>
            <Spinner color="text.disabled" size={small ? 'small' : 'medium'} />
          </SpinnerContainer>
        )}
      </StyledButton>
    );
  },
);

Button.propTypes = {
  ariaLabel: string,
  children: node,
  disabled: bool,
  full: bool,
  inverted: bool,
  isLoading: bool,
  onClick: func,
  small: bool,
  secondary: bool,
  /** an Icon from yoga-icons package */
  icon: oneOfType([node, func]),
  href: string,
  'aria-label': string,
};

Button.displayName = 'Button';

export default Button;
