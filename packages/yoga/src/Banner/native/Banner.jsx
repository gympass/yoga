import React from 'react';

import styled from 'styled-components';
import { margins } from '@gympass/yoga-system';
import { func, oneOf, string, checkPropTypes } from 'prop-types';

import Text from '../../Text';
import Button from '../../Button';
import Box from '../../Box';

const StyledBanner = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
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
const Banner = ({ variant, message, onAction, actionLabel, ...props }) => (
  <StyledBanner variant={variant} {...props}>
    <Text.Small flex={1} marginVertical="xxxsmall">
      {message}
    </Text.Small>
    {!!onAction && actionLabel && (
      <Box
        as={Button.Text}
        marginLeft="xxsmall"
        small
        secondary
        onPress={onAction}
      >
        {actionLabel}
      </Box>
    )}
  </StyledBanner>
);

Banner.propTypes = {
  /** style the banner following the theme (success, informative, attention) */
  variant: oneOf(['success', 'informative', 'attention']),
  /** the message to display */
  message: string.isRequired,
  /** Function for the custom action. The `actionLabel` becomes required when passing this function. */
  onAction: (props, propName, componentName) => {
    const { actionLabel } = props;

    if (actionLabel) {
      checkPropTypes(
        { [propName]: func.isRequired },
        props,
        'prop',
        componentName,
      );
    }

    return null;
  },
  /** Label for a custom action. */
  actionLabel: (props, propName, componentName) => {
    const { onAction } = props;

    if (onAction) {
      checkPropTypes(
        { [propName]: string.isRequired },
        props,
        'prop',
        componentName,
      );
    }

    return null;
  },
};

Banner.defaultProps = {
  variant: 'informative',
  onAction: null,
  actionLabel: null,
};

export default Banner;
