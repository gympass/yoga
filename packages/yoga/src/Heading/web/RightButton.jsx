import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../../Button';
import Icon from '../../Icon';
import Box from '../../Box';

const ButtonIcon = styled(Button)`
  ${({
    secondary,
    theme: {
      yoga: {
        components: { heading },
      },
    },
  }) => {
    return css`
      background-color: transparent;
      box-shadow: none;
      max-width: ${heading.button.width}px;
      min-width: ${heading.button.width}px;
      height: ${heading.button.height}px;

      &:active {
        background-color: transparent;
        & svg {
          fill: ${heading.button.color};
        }
      }

      &:not([disabled]):hover {
        background-color: transparent;
        box-shadow: none;
      }

      &:not([disabled]):hover {
        background-color: transparent;
        box-shadow: none;
      }
      :not([disabled]):focus {
        box-shadow: none;
      }

      & div {
        min-width: ${heading.button.backgroundWidth}px;
        max-width: ${heading.button.backgroundWidth}px;
        height: ${heading.button.backgroundHeight}px;
        background-color: ${secondary
          ? 'transparent'
          : heading.button.background};
      }

      & svg {
        fill: ${heading.button.color};
        margin: 0;
      }
    `;
  }};
`;

const RightButton = ({ onClick, icon, 'aria-label': ariaLabel, ...props }) => (
  <ButtonIcon
    onClick={onClick}
    secondary
    padding="xxxsmall"
    aria-label={ariaLabel}
    {...props}
  >
    <Box
      flex={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="50%"
      width="xxlarge"
      height="xxlarge"
    >
      <Icon as={icon} role="img" />
    </Box>
  </ButtonIcon>
);

RightButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.elementType.isRequired,
  'aria-label': PropTypes.string,
};

RightButton.displayName = 'Heading.RightButton';

export default RightButton;
