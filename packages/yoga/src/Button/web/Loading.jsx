import React from 'react';
import { bool, string, node } from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import ButtonOutline from './Outline';
import Spinner from '../../Spinner';

const ButtonLoading = ({
  isLoading,
  children,
  disabled,
  variant,
  ...props
}) => {
  const commonProps = {
    isLoading,
    disabled: isLoading || disabled,
    ...props,
  };

  const ButtonComponent = variant === 'outline' ? ButtonOutline : Button;

  const LoadingContainer = styled.div`
    position: relative;

    & > span {
      color: transparent;
    }
  `;

  const SpinnerContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  const renderLoading = () => {
    return (
      <LoadingContainer>
        <span>{children}</span>
        <SpinnerContainer>
          <Spinner color="deep" size="small" />
        </SpinnerContainer>
      </LoadingContainer>
    );
  };

  const renderLoadingLabel = () => {
    return <span>{children}</span>;
  };

  return (
    <ButtonComponent {...commonProps}>
      {isLoading ? renderLoading() : renderLoadingLabel()}
    </ButtonComponent>
  );
};

ButtonLoading.propTypes = {
  isLoading: bool,
  disabled: bool,
  children: node,
  variant: string,
};

ButtonLoading.defaultProps = {
  isLoading: false,
  disabled: false,
  children: 'Button',
  variant: 'default',
};

ButtonLoading.displayName = 'Button.Loading';

export default ButtonLoading;
