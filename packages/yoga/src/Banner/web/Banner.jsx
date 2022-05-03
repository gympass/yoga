import React from 'react';

import styled from 'styled-components';
import { margins, paddings } from '@gympass/yoga-system';
import { checkPropTypes, elementType, func, oneOf, string } from 'prop-types';

import { Box, Button, Icon, Text } from '../..';

const StyledBanner = styled(Box)`
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
    padding: ${spacing.xxsmall}px
      ${spacing.small}px;
    border-radius: ${banner.border.radius}px;
  `}

  ${margins}

  ${paddings}
`;

/** A banner is a component that displays a prominent message. It can have a related actions button on it or not. */
const Banner = ({
  icon,
  variant,
  message,
  actionLabel,
  onAction,
  ...props
}) => (
  <StyledBanner
    display="flex"
    flex={1}
    alignItems="center"
    of="hidden"
    variant={variant}
    {...props}
  >
    {icon && (
      <Icon as={icon} size="medium" fill="secondary" marginRight="xxsmall" />
    )}
    <Text.Small flex={1} marginVertical="xxsmall">
      {message}
    </Text.Small>
    {!!onAction && actionLabel && (
      <Box
        as={Button.Text}
        marginLeft="xxsmall"
        small
        secondary
        onClick={onAction}
      >
        {actionLabel}
      </Box>
    )}
  </StyledBanner>
);

Banner.propTypes = {
  /** SVG to be rendered. */
  icon: elementType,
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
  icon: null,
  variant: 'informative',
  actionLabel: null,
  onAction: null,
};

export default Banner;
