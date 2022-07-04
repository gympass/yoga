import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ArrowLeft } from '@gympass/yoga-icons';
import Button from '../../Button';

const ButtonIcon = styled(Button.Icon)`
  ${({
    theme: {
      yoga: {
        components: { heading },
      },
    },
  }) => {
    return `
    width: ${heading.button.width}px;
    height: ${heading.button.height}px;
  `;
  }}
`;

const BackButton = ({ onClick, ...props }) => (
  <ButtonIcon {...props} icon={ArrowLeft} inverted onClick={onClick} />
);

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

BackButton.displayName = 'Heading.BackButton';

export default BackButton;
