import React from 'react';

import styled from 'styled-components';
import { margins } from '@gympass/yoga-system';
import { func, oneOf, shape, string } from 'prop-types';

import Text from '../../Text';
import Button from '../../Button';
import Box from '../../Box';

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
        spacing,
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
    padding: ${spacing.xsmall}px
      ${spacing.small}px;
    border-radius: ${banner.border.radius}px;
  `}

  ${margins}
`;

/** A banner is a component that displays a prominent message. It can have a related actions button on it or not. */
const Banner = ({ variant, message, button }) => (
  <StyledBanner variant={variant}>
    <Text.Small flex={1} marginVertical="xxxsmall">
      {message}
    </Text.Small>
    {!!button && (
      <Box
        as={Button.Text}
        marginLeft="xxsmall"
        small
        secondary
        onPress={button.action}
      >
        {button.label}
      </Box>
    )}
  </StyledBanner>
);

Banner.propTypes = {
  /** style the banner following the theme (success, informative, attention) */
  variant: oneOf(['success', 'informative', 'attention']),
  message: string.isRequired,
  /** the banner button must have a label and action defined (e.g `{ label: 'Action', action: () => {} }`) */
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
