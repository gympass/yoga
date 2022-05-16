import React, { createRef } from 'react';
import styled, { withTheme } from 'styled-components';
import { string, oneOf, func, elementType, number } from 'prop-types';

import { PanResponder } from 'react-native';
import Box from '../../Box';
import Button from '../../Button';
import Icon from '../../Icon';
import Text from '../../Text';
import SnackbarAnimationWrapper from './SnackbarAnimationWrapper';

const SWIPE_THRESHOLD = 32;

const SnackbarContainer = styled.View`
  ${({
    bottomOffset,
    variant,
    theme: {
      yoga: {
        colors: { feedback },
        components: {
          snackbar: {
            padding,
            margin,
            variant: { [variant]: backgroundColor = feedback.success.light },
            border,
          },
        },
      },
    },
  }) => `
    padding: ${padding.vertical}px ${padding.horizontal}px;
    margin-horizontal: ${margin.horizontal}px
    margin-bottom: ${margin.bottom + bottomOffset}px;
    background-color: ${backgroundColor};
    border-radius: ${border.radius}px;
    flex-direction: row;
    align-items: center;
  `}
`;

const Snackbar = ({
  icon,
  message,
  actionLabel,
  onAction,
  variant,
  onSnackbarClose,
  duration,
  bottomOffset,
  ...props
}) => {
  const wrapperRef = createRef();

  const handlePanResponderRelease = (_evt, gestureState) => {
    if (gestureState.dy > SWIPE_THRESHOLD) {
      wrapperRef.current.close();
    } else {
      wrapperRef.current.open();
    }
  };

  const panResponder = PanResponder.create({
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dy > 0) {
        wrapperRef.current.translateY(gestureState.dy);
      }
    },
    onPanResponderRelease: handlePanResponderRelease,
    onPanResponderTerminate: handlePanResponderRelease,
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: (_, gestureState) => {
      return !(gestureState.dy <= 2 && gestureState.dy >= -2);
    },
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderTerminationRequest: () => true,
    onShouldBlockNativeResponder: () => true,
  });

  const handleOnAction = () => {
    wrapperRef.current.close();
    onAction();
  };

  return (
    <SnackbarAnimationWrapper
      onSnackbarClose={onSnackbarClose}
      duration={duration}
      ref={wrapperRef}
    >
      <SnackbarContainer
        variant={variant}
        bottomOffset={bottomOffset}
        {...props}
        {...panResponder.panHandlers}
      >
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
            onPress={handleOnAction}
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
  bottomOffset: number,
};

Snackbar.defaultProps = {
  variant: 'success',
  icon: undefined,
  actionLabel: undefined,
  onAction: undefined,
  onSnackbarClose: undefined,
  duration: 'default',
  bottomOffset: 0,
};

export default withTheme(Snackbar);
