import React from 'react';

import styled from 'styled-components';
import { margins, paddings } from '@gympass/yoga-system';
import { checkPropTypes, func, oneOf, string } from 'prop-types';

import Text from '../../Text';
import Button from '../../Button';
import Box from '../../Box';

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
    padding: ${spacing.xsmall}px
      ${spacing.small}px;
    border-radius: ${banner.border.radius}px;
  `}

  ${margins}

  ${paddings}
`;

/** A banner is a component that displays a prominent message. It can have a related actions button on it or not. */
const Banner = ({ variant, message, actionLabel, onAction, ...props }) => (
  <StyledBanner
    display="flex"
    flex={1}
    alignItems="center"
    of="hidden"
    variant={variant}
    {...props}
  >
    <Text.Small flex={1} marginVertical="xxxsmall">
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
  /** style the banner following the theme (success, informative, attention) */
  variant: oneOf(['success', 'informative', 'attention']),
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
  actionLabel: null,
  onAction: null,
};

export default Banner;
