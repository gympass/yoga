import React, { forwardRef } from 'react';

import styled from 'styled-components';
import { borders, margins } from '@gympass/yoga-system';
import {
  func,
  oneOf,
  string,
  checkPropTypes,
  elementType,
  shape,
} from 'prop-types';

import Box from '../../Box';
import Button from '../../Button';
import Icon from '../../Icon';
import Text from '../../Text';

const StyledBanner = styled.View`
  display: flex;
  flex: 1;
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
    padding: ${spacing.xxsmall}px
      ${spacing.small}px;
    border-radius: ${banner.border.radius}px;
  `}

  ${margins}
  
  ${borders}
`;

const BannerActionButton = React.forwardRef(
  ({ button: { label, action }, ...props }, ref) => (
    <Box as={Button.Text} small secondary onPress={action} ref={ref} {...props}>
      {label}
    </Box>
  ),
);

BannerActionButton.propTypes = {
  button: shape({
    label: string.isRequired,
    action: func.isRequired,
  }).isRequired,
};

/** A banner is a component that displays a prominent message. It can have related action buttons on it or not. */
const Banner = forwardRef(
  (
    {
      icon = undefined,
      variant = 'informative',
      message,
      primaryButton = undefined,
      secondaryButton = undefined,
      ...rest
    },
    ref,
  ) => {
    return (
      <StyledBanner ref={ref} variant={variant} {...rest}>
        <Box flexDirection="row" flex={1} alignItems="center">
          {icon && (
            <Icon
              as={icon}
              size="medium"
              fill="secondary"
              marginRight="xxsmall"
            />
          )}
          <Text.Body2 flex={1} marginTop="xxsmall" marginBottom="xxsmall">
            {message}
          </Text.Body2>
          {primaryButton && !secondaryButton && (
            <BannerActionButton button={primaryButton} marginLeft="xxsmall" />
          )}
        </Box>
        {primaryButton && secondaryButton && (
          <Box
            display="flex"
            flex={1}
            justifyContent="flex-end"
            flexDirection="row"
            marginBottom="xxsmall"
          >
            <BannerActionButton button={primaryButton} marginRight="xxxsmall" />
            <BannerActionButton button={secondaryButton} />
          </Box>
        )}
      </StyledBanner>
    );
  },
);

const BannerActionButtonType = shape({
  label: string.isRequired,
  action: func.isRequired,
});

Banner.propTypes = {
  /** SVG to be rendered. */
  icon: elementType,
  /** style the banner following the theme (success, informative, attention) */
  variant: oneOf(['success', 'informative', 'attention']),
  /** the message to be displayed */
  message: string.isRequired,
  /** the label and action fuction are required for banner action buttons  */
  primaryButton: BannerActionButtonType,
  /** the secondary button should only be used assemble the primary button (the label and action fuction are required for banner action buttons).  */
  secondaryButton: (props, propName, componentName) => {
    const { primaryButton } = props;

    if (!primaryButton && !!props[propName]) {
      return new Error(
        `The ${propName} must only be used ensemble with the primaryButton.`,
      );
    }

    return checkPropTypes(
      { [propName]: BannerActionButtonType },
      props,
      'prop',
      componentName,
    );
  },
};

export default Banner;
