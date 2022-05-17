import React, {
  createRef,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Animated, useWindowDimensions, Easing, View } from 'react-native';
import { func, node, oneOf } from 'prop-types';

const durationDictionary = {
  fast: 4000,
  default: 8000,
  slow: 10000,
  indefinite: -1,
};

const SnackbarAnimationWrapper = forwardRef(
  ({ onSnackbarClose, children, duration }, ref) => {
    const { height: windowHeight } = useWindowDimensions();

    const [childrenHeight, setChildrenHeight] = useState();

    const translateY = useRef(new Animated.Value(windowHeight)).current;

    const timeoutRef = useRef();

    const childrenRef = createRef();

    useEffect(() => {
      if (childrenRef.current) {
        childrenRef.current.measureLayout(
          childrenRef.current,
          (_, __, ___, height) => {
            setChildrenHeight(height);
            translateY.setValue(height);
          },
        );
      }
    }, [childrenRef.current]);

    const openAnimation = () => {
      Animated.spring(translateY, {
        toValue: 0,
        easing: Easing.bezier(0.41, 0.09, 0.2, 1),
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

    const setSnackbarTimeout = () => {
      const timeoutDuration = durationDictionary[duration];
      const shouldCloseOnTimer = childrenHeight && timeoutDuration > 0;

      if (shouldCloseOnTimer) {
        timeoutRef.current = setTimeout(() => {
          closeAnimation();
          clearTimeout(timeoutRef.current);
        }, timeoutDuration);
      }
    };

    useImperativeHandle(ref, () => ({
      open: () => {
        openAnimation();
        setSnackbarTimeout();
      },
      close: () => {
        closeAnimation();
        clearTimeout(timeoutRef.current);
      },
      translateY: dy => {
        translateY.setValue(dy);
      },
    }));

    useEffect(() => {
      return () => clearTimeout(timeoutRef.current);
    }, []);

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
      >
        <View ref={childrenRef}>{children}</View>
      </Animated.View>
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
