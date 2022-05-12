import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  useWindowDimensions,
  Easing,
  PanResponder,
  View,
} from 'react-native';
import { bool, func, node, oneOf } from 'prop-types';

const SWIPE_THRESHOLD = 32;

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
  const { height: windowHeight } = useWindowDimensions();

  const [childrenHeight, setChildrenHeight] = useState();

  const translateY = useRef(new Animated.Value(windowHeight)).current;

  const timeoutRef = useRef();

  const childrenRef = createRef();

  useEffect(() => {
    childrenRef.current.measure((_, __, ___, height) => {
      setChildrenHeight(height);
      translateY.setValue(height);
    });
  }, [childrenRef.current]);

  useEffect(() => {
    if (childrenHeight && isOpen) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 200,
        easing: Easing.bezier(0.41, 0.09, 0.2, 1),
        useNativeDriver: true,
      }).start();
    }
  }, [translateY, childrenHeight, isOpen]);

  const openAnimation = () => {
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const closeAnimation = useCallback(() => {
    Animated.spring(translateY, {
      toValue: childrenHeight,
      useNativeDriver: true,
    }).start();
    if (onSnackbarClose) {
      onSnackbarClose();
    }
  }, [childrenHeight]);

  function handlePanResponderRelease(_evt, gestureState) {
    if (gestureState.dy > SWIPE_THRESHOLD) {
      closeAnimation();
    } else {
      openAnimation();
    }
  }

  useEffect(() => {
    const timeoutDuration = durationDictionary[duration];
    const shouldCloseOnTimer = childrenHeight && timeoutDuration > 0;

    if (shouldCloseOnTimer) {
      timeoutRef.current = setTimeout(() => {
        closeAnimation();
      }, timeoutDuration);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [duration, childrenHeight]);

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
      <View ref={childrenRef}>{children}</View>
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
