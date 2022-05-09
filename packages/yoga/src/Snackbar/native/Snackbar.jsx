import React from 'react';
import styled, { withTheme } from 'styled-components';
import { string, oneOf, func, elementType } from 'prop-types';

import Box from '../../Box';
import Button from '../../Button';
import Icon from '../../Icon';
import Text from '../../Text';
import SnackbarAnimationWrapper from './SnackbarAnimationWrapper';

const SnackbarContainer = styled(Box).attrs(
  ({
    variant,
    theme: {
      yoga: {
        colors: { feedback },
        components: {
          snackbar: {
            padding,
            margin,
            shadow,
            variant: { [variant]: backgroundColor = feedback.success.light },
            border,
          },
        },
      },
    },
  }) => ({
    paddingVertical: padding.vertical,
    paddingHorizontal: padding.horizontal,
    mt: margin.top,
    mr: margin.right,
    mb: margin.bottom,
    ml: margin.left,
    elevation: shadow.default,
    bgColor: backgroundColor,
    bRadius: border.radius,
  }),
)`
  flex-direction: row;
  align-items: center;
`;

const Snackbar = ({
  icon,
  message,
  actionLabel,
  onAction,
  variant,
  theme,
  onSnackbarClose,
  duration,
}) => {
  return (
    <SnackbarAnimationWrapper
      onSnackbarClose={onSnackbarClose}
      duration={duration}
    >
      <SnackbarContainer variant={variant} theme={theme}>
        {icon && (
          <Icon as={icon} fill="secondary" size="large" marginRight="xxsmall" />
        )}
        <Text
          flex={1}
          fontSize="small"
          marginVertical="xxxsmall"
          numberOfLines={2}
        >
          {message}
        </Text>
        {actionLabel && onAction && (
          <Box
            as={Button.Text}
            small
            secondary
            marginLeft="xxsmall"
            onPress={onAction}
          >
            {actionLabel}
          </Box>
        )}
      </SnackbarContainer>
    </SnackbarAnimationWrapper>
  );
};

Snackbar.propTypes = {
  variant: oneOf(['success', 'informative', 'attention', 'failure', 'info']),
  icon: elementType,
  message: string.isRequired,
  actionLabel: string,
  onAction: func,
  onSnackbarClose: func,
  duration: oneOf(['fast', 'default', 'slow', 'indefinite']),
};

Snackbar.defaultProps = {
  variant: 'success',
  icon: undefined,
  actionLabel: undefined,
  onAction: undefined,
  onSnackbarClose: undefined,
  duration: 'default',
};

export default withTheme(Snackbar);
