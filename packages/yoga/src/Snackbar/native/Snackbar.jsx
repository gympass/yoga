import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { PanResponder } from 'react-native';
import styled from 'styled-components';
import { string, oneOf, func, elementType, number } from 'prop-types';

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
            variant: {
              color: { [variant]: backgroundColor = feedback.success.light },
            },
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

/**
 * Gympass `<Snackbar />` is the proper component to show alert messages.
 *
 * For web components, the `Snackbar` may have an icon, a custom action and a close button.
 *
 * For native, the `Snackbar` may have an icon and a custom action.
 */
const Snackbar = forwardRef((props, ref) => {
  const {
    icon,
    message,
    actionLabel,
    onAction,
    variant,
    onSnackbarClose,
    duration,
    bottomOffset,
    ...rest
  } = props;

  const wrapperRef = useRef();

  useEffect(() => {
    if (!message) wrapperRef.current.close();
  }, [message]);

  useImperativeHandle(ref, () => ({
    open: wrapperRef.current.open,
    close: wrapperRef.current.close,
  }));

  const handlePanResponderRelease = (_evt, gestureState) =>
    (gestureState.dy > SWIPE_THRESHOLD
      ? wrapperRef.current.close
      : wrapperRef.current.open)();

  const panResponder = PanResponder.create({
    onPanResponderMove: wrapperRef.current?.close,
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
    if (onAction) onAction();
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
        {...rest}
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
        {actionLabel && (
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
});

Snackbar.propTypes = {
  /** The style variant change the color of the component, it may be "success", "informative" or "attention". */
  variant: oneOf(['success', 'informative', 'attention']),
  /** Can be any icon of yoga-icons. */
  icon: elementType,
  /** The message shown when snackbar is opened. The maximum number of lines is two. */
  message: string.isRequired,
  /** Label for a custom action. */
  actionLabel: string,
  /** Function for the custom action. The `actionLabel` becomes required when passing this function. */
  onAction: func,
  /** Callback function triggered by the Snackbar close action. Can be used for events, for example. */
  onSnackbarClose: func,
  /** The duration sets how long it will take to close snackbar automatically, it may be "fast" (4 seconds), "default" (8 seconds), "slow" (10 seconds) or "indefinite" (it doesn't close automatically). */
  duration: oneOf(['fast', 'default', 'slow', 'indefinite']),
  /** Add extra margin to Snackbar. Can be useful for SafeAreaView or button cases. */
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

export default Snackbar;
