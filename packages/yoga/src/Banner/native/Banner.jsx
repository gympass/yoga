import React from 'react';

import styled from 'styled-components';
import { margins } from '@gympass/yoga-system';
import { func, oneOf, shape, string } from 'prop-types';

import Text from '../../Text';
import Button from '../../Button';

const StyledBanner = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${({
    variant,
    theme: {
      yoga: {
        components: { banner },
        colors: {
          feedback: {
            [variant]: backgroundColor = {
              light: banner.defaultBackgroundColor,
            },
          },
        },
      },
    },
  }) => `
    background-color: ${backgroundColor.light};
    padding: ${banner.padding.top}px
      ${banner.padding.right}px
      ${banner.padding.bottom}px
      ${banner.padding.left}px;
    border-radius: ${banner.border.radius}px;
  `}

  ${margins}
`;

const Banner = ({ variant, message, button }) => (
  <StyledBanner variant={variant}>
    <Text.Small flex={1}>{message}</Text.Small>
    {!!button && (
      <Button.Link marginLeft="small" secondary onPress={button.action}>
        {button.label}
      </Button.Link>
    )}
  </StyledBanner>
);

Banner.propTypes = {
  variant: oneOf(['success', 'informative', 'attention']),
  message: string.isRequired,
  button: shape({
    label: string.isRequired,
    action: func.isRequired,
  }),
};

Banner.defaultProps = {
  variant: 'informative',
  button: null,
};

export default Banner;
