import React from 'react';

import styled from 'styled-components';
import { margins, paddings } from '@gympass/yoga-system';
import {
  checkPropTypes,
  elementType,
  func,
  oneOf,
  shape,
  string,
} from 'prop-types';

import Box from '../../Box';
import Button from '../../Button';
import Icon from '../../Icon';
import Text from '../../Text';

const StyledBanner = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
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

/** A banner is a component that displays a prominent message. It can have related action buttons on it or not. */
const Banner = ({
  icon,
  variant,
  message,
  primaryButton,
  secondaryButton,
  ...props
}) => (
  <StyledBanner variant={variant} {...props}>
    <Box display="flex" flex={1} flexDirection="row" alignItems="center">
      {icon && (
        <Icon as={icon} size="medium" fill="secondary" marginRight="xxsmall" />
      )}
      <Text.Small flex={1} marginVertical="xxsmall">
        {message}
      </Text.Small>
      {!!primaryButton && !secondaryButton && (
        <Box
          as={Button.Text}
          marginLeft="xxsmall"
          small
          secondary
          onClick={primaryButton.action}
        >
          {primaryButton.label}
        </Box>
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
        <Box
          as={Button.Text}
          marginRight="xxxsmall"
          small
          secondary
          onClick={primaryButton.action}
        >
          {primaryButton.label}
        </Box>
        <Box as={Button.Text} small secondary onClick={secondaryButton.action}>
          {secondaryButton.label}
        </Box>
      </Box>
    )}
  </StyledBanner>
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
  /** the message to display */
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

Banner.defaultProps = {
  icon: undefined,
  variant: 'informative',
  primaryButton: undefined,
  secondaryButton: undefined,
};

export default Banner;
