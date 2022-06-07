import React, {
  forwardRef,
  useState,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { Animated, Easing } from 'react-native';

import { func, node, oneOf } from 'prop-types';
import styled from 'styled-components';

const durationDictionary = {
  fast: 4000,
  default: 8000,
  slow: 10000,
  indefinite: -1,
};

const timingDuration = 200;
const easing = Easing.inOut(Easing.bezier(0.41, 0.09, 0.2, 1));

const Wrapper = styled(Animated.View)`
  position: absolute;
  width: 100%;
  bottom: 0px;
`;

const SnackbarAnimationWrapper = forwardRef(
  ({ onSnackbarClose, children, duration }, ref) => {
    const [childrenHeight, setChildrenHeight] = useState(0);

    const timeoutRef = useRef();
    const translateY = useRef(new Animated.Value(0)).current;

    const openAnimation = callback => {
      Animated.timing(translateY, {
        toValue: 1,
        duration: timingDuration,
        easing,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished && callback) callback();
      });
    };

    const closeAnimation = callback => {
      Animated.timing(translateY, {
        toValue: 0,
        duration: timingDuration,
        easing,
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
    }));

    useEffect(() => () => clearTimeout(timeoutRef.current), []);

    return (
      <Wrapper
        onLayout={({
          nativeEvent: {
            layout: { height },
          },
        }) => {
          setChildrenHeight(height);
        }}
        style={[
          {
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [0, 1],
                  outputRange: [childrenHeight, 0],
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
