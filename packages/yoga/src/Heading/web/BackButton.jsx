import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { ArrowLeft } from '@gympass/yoga-icons';
import Button from '../../Button';
import Box from '../../Box';

const ButtonIcon = styled(Button.Icon)`
  ${({
    theme: {
      yoga: {
        components: { heading },
      },
    },
  }) => {
    return css`
      min-width: ${heading.button.width}px;
      max-width: ${heading.button.width}px;
      height: ${heading.button.height}px;
      background-color: ${heading.button.background};
    `;
  }}
`;

const BackButton = ({ onClick, ...props }) => (
  <Box padding="xxxsmall" onClick={onClick} role="button" tabIndex={0}>
    <ButtonIcon tabIndex={-1} icon={ArrowLeft} inverted secondary {...props} />
  </Box>
);

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

BackButton.displayName = 'Heading.BackButton';

export default BackButton;
