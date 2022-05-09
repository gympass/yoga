import React, { useEffect, useRef } from 'react';
import { Animated, Easing, PanResponder } from 'react-native';
import { func, node } from 'prop-types';

const SWIPE_THRESHOLD = 36;

const SnackbarAnimationWrapper = ({ onClose, children }) => {
  const translateY = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 200,
      easing: Easing.bezier(0.41, 0.09, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [translateY]);

  const closeAnimation = gestureState =>
    Animated.spring(translateY, {
      toValue: gestureState.dy > SWIPE_THRESHOLD ? 100 : 0,
      useNativeDriver: true,
    });

  function handlePanResponderRelease(_evt, gestureState) {
    closeAnimation(gestureState).start();

    if (gestureState.dy > SWIPE_THRESHOLD) {
      onClose();
    }
  }

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
  onClose: func,
  children: node.isRequired,
};

SnackbarAnimationWrapper.defaultProps = {
  onClose: () => {},
};

export default SnackbarAnimationWrapper;
