import React from 'react';
import styled, { withTheme } from 'styled-components';
import { string, oneOf, func, elementType } from 'prop-types';

import Box from '../../Box';
import Button from '../../Button';
import Icon from '../../Icon';
import Text from '../../Text';
import SnackbarAnimationWrapper from './SnackbarAnimationWrapper';

const SnackbarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  ${({
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
  }) => `
    padding: ${padding.vertical}px ${padding.horizontal}px;
    margin: ${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px;
    box-shadow: ${shadow.default};
    background-color: ${backgroundColor};
    border-radius: ${border.radius}px;
  `}
`;

const Snackbar = ({ icon, message, actionLabel, onAction, ...props }) => {
  return (
    <SnackbarAnimationWrapper>
      <SnackbarContainer {...props}>
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
};

Snackbar.defaultProps = {
  variant: 'success',
  icon: undefined,
  actionLabel: undefined,
  onAction: undefined,
};

export default withTheme(Snackbar);
