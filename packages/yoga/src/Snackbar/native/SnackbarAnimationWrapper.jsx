import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { Animated, Easing } from 'react-native';

import { func, node, oneOf } from 'prop-types';
import styled from 'styled-components';

const easingValues = {
  entry: Easing.bezier(0.0, 0.0, 0.2, 1),
  exit: Easing.bezier(0.4, 0.0, 1, 1),
};

const durationDictionary = {
  fast: 4000,
  default: 8000,
  slow: 10000,
  indefinite: -1,
};

const timingDuration = 200;

const Wrapper = styled(Animated.View)`
  position: absolute;
  width: 100%;
  bottom: 0px;
`;

const SnackbarAnimationWrapper = forwardRef(
  ({ onSnackbarClose, children, duration }, ref) => {
    const translateY = useRef(new Animated.Value(0)).current;

    const timeoutRef = useRef();

    const openAnimation = () => {
      Animated.timing(translateY, {
        toValue: 1,
        duration: timingDuration,
        easing: easingValues.entry,
        useNativeDriver: true,
      }).start();
    };

    const closeAnimation = callback => {
      Animated.timing(translateY, {
        toValue: 0,
        duration: timingDuration,
        easing: easingValues.exit,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished && callback) callback();
      });

      if (onSnackbarClose) onSnackbarClose();
    };

    const setupSnackbarTimeout = () => {
      const timeoutDuration = durationDictionary[duration];
      const shouldCloseOnTimer = timeoutDuration > 0;

      if (shouldCloseOnTimer) {
        timeoutRef.current = setTimeout(() => {
          clearTimeout(timeoutRef.current);
          closeAnimation();
        }, timeoutDuration);
      }
    };

    const openSnackbar = () => {
      openAnimation();
      setupSnackbarTimeout();
    };

    const closeSnackbar = callback => {
      clearTimeout(timeoutRef.current);
      closeAnimation(callback);
    };

    useImperativeHandle(ref, () => ({
      open: openSnackbar,
      close: closeSnackbar,
      translateY: dy => translateY.setValue(dy),
    }));

    useEffect(() => () => clearTimeout(timeoutRef.current), []);

    return (
      <Wrapper
        style={[
          {
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, 0],
                }),
              },
            ],
          },
        ]}
      >
        {children}
      </Wrapper>
    );
  },
);

SnackbarAnimationWrapper.propTypes = {
  onSnackbarClose: func,
  children: node.isRequired,
  duration: oneOf(['fast', 'default', 'slow', 'indefinite']).isRequired,
};

SnackbarAnimationWrapper.defaultProps = {
  onSnackbarClose: undefined,
};

export default SnackbarAnimationWrapper;
