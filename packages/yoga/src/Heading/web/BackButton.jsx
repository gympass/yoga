import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { ArrowLeft } from '@gympass/yoga-icons';
import Button from '../../Button';
import Box from '../../Box';
import Icon from '../../Icon';

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

const BackButton = ({ onClick, ...props }) => (
  <ButtonIcon onClick={onClick} padding="xxxsmall" {...props}>
    <Box
      flex={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="50%"
      width="xxlarge"
      height="xxlarge"
    >
      <Icon as={ArrowLeft} role="img" />
    </Box>
  </ButtonIcon>
);

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

BackButton.displayName = 'Heading.BackButton';

export default BackButton;
