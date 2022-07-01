import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../../Button';

const ButtonIcon = styled(Button.Icon)`
  ${({
    theme: {
      yoga: {
        components: { heading },
      },
    },
  }) =>
    css`
      width: ${heading.button.width}px;
      height: ${heading.button.height}px;

      :not(:last-of-type) {
        margin-right: ${heading.button.marginRight}px;
      }
    `};
`;

const RightButton = ({ onClick, icon, ...props }) => (
  <ButtonIcon {...props} icon={icon} inverted onClick={onClick} />
);

RightButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.elementType.isRequired,
};

RightButton.displayName = 'Heading.RightButton';

export default RightButton;
