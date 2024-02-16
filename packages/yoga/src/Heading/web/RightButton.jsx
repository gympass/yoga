import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../../Button';
import Box from '../../Box';

const ButtonIcon = styled(Button.Icon)`
  ${({
    secondary,
    theme: {
      yoga: {
        components: { heading },
      },
    },
  }) =>
    css`
      width: ${heading.button.width}px;
      height: ${heading.button.height}px;
      background-color: ${secondary
        ? 'transparent'
        : heading.button.background};

      :not(:last-of-type) {
        margin-right: ${heading.button.marginRight}px;
      }
    `};
`;

const RightButton = ({ onClick, icon, ...props }) => (
  <Box padding="xxxsmall" onClick={onClick} role="button" tabIndex={0}>
    <ButtonIcon icon={icon} secondary inverted {...props} />
  </Box>
);

RightButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.elementType.isRequired,
};

RightButton.displayName = 'Heading.RightButton';

export default RightButton;
