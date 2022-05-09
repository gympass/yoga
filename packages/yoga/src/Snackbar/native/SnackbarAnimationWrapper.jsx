import React, { useEffect, useRef } from 'react';
import { Animated, Easing, PanResponder } from 'react-native';
import { bool, func, node, oneOf } from 'prop-types';

const SWIPE_THRESHOLD = 36;

const durationDictionary = {
  fast: 4000,
  default: 8000,
  slow: 10000,
  indefinite: -1,
};

const SnackbarAnimationWrapper = ({
  onSnackbarClose,
  children,
  duration,
  isOpen,
}) => {
  const timeoutRef = useRef();

  const translateY = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    if (isOpen) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 200,
        easing: Easing.bezier(0.41, 0.09, 0.2, 1),
        useNativeDriver: true,
      }).start();
    }
  }, [translateY, isOpen]);

  const openAnimation = () => {
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const closeAnimation = () => {
    Animated.spring(translateY, {
      toValue: 100,
      useNativeDriver: true,
    }).start();
    if (onSnackbarClose) {
      onSnackbarClose();
    }
  };

  function handlePanResponderRelease(_evt, gestureState) {
    if (gestureState.dy > SWIPE_THRESHOLD) {
      closeAnimation();
    } else {
      openAnimation();
    }
  }

  useEffect(() => {
    const timoutDuration = durationDictionary[duration];
    const shouldCloseOnTimer = timoutDuration > 0;

    if (shouldCloseOnTimer) {
      timeoutRef.current = setTimeout(() => {
        closeAnimation();
      }, timoutDuration);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [duration]);

  useEffect(() => {
    if (!isOpen) {
      closeAnimation();
    }
  }, [isOpen]);

  const panResponder = useRef(
    PanResponder.create({
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          translateY.setValue(gestureState.dy);
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
    }),
  ).current;

  return (
    <Animated.View
      style={[
        {
          width: '100%',
          position: 'absolute',
          bottom: 0,
          zIndex: 10,
        },
        {
          transform: [{ translateY }],
        },
      ]}
      {...panResponder.panHandlers}
    >
      {children}
    </Animated.View>
  );
};

SnackbarAnimationWrapper.propTypes = {
  onSnackbarClose: func,
  children: node.isRequired,
  duration: oneOf(['fast', 'default', 'slow', 'indefinite']).isRequired,
  isOpen: bool.isRequired,
};

SnackbarAnimationWrapper.defaultProps = {
  onSnackbarClose: undefined,
};

export default SnackbarAnimationWrapper;
