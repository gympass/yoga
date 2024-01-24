import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Animated, useWindowDimensions, View } from 'react-native';
import { func, InferProps, node, oneOf } from 'prop-types';
import styled from 'styled-components';

const durationDictionary = {
  fast: 4000,
  default: 8000,
  slow: 10000,
  indefinite: -1,
};

const Wrapper = styled(Animated.View)(
  () => `
    position: absolute;
    width: 100%;
    bottom: 0px;
  `,
);

const propTypes = {
  onSnackbarClose: func,
  children: node.isRequired,
  duration: oneOf(['fast', 'default', 'slow', 'indefinite']).isRequired,
};

type SnackbarAnimationWrapperProps = InferProps<typeof propTypes>;

const SnackbarAnimationWrapper = forwardRef<
  | {
      open: () => void;
      close: (callback: () => void) => void;
      translateY: (dy: number) => void;
    }
  | undefined,
  SnackbarAnimationWrapperProps
>(({ onSnackbarClose, children, duration }, ref) => {
  const { height: windowHeight } = useWindowDimensions();

  const [childrenHeight, setChildrenHeight] = useState<number>();

  const translateY = useRef(new Animated.Value(windowHeight)).current;

  const timeoutRef = useRef<NodeJS.Timeout>();

  const childrenRef = useRef<View>() as React.LegacyRef<View> | undefined;

  const openAnimation = () => {
    Animated.spring(translateY, {
      toValue: 0,
      bounciness: 0,
      useNativeDriver: true,
    }).start();
  };

  const closeAnimation = (callback?: () => void) => {
    if (childrenHeight) {
      Animated.spring(translateY, {
        toValue: childrenHeight,
        bounciness: 0,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished && callback) {
          callback();
        }
      });

      if (onSnackbarClose) {
        onSnackbarClose();
      }
    }
  };

  const setupSnackbarTimeout = () => {
    const timeoutDuration = durationDictionary[duration];
    const shouldCloseOnTimer = childrenHeight && timeoutDuration > 0;

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
    open: () => {
      openSnackbar();
    },
    close: callback => {
      closeSnackbar(callback);
    },
    translateY: dy => {
      translateY.setValue(dy);
    },
  }));

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <Wrapper style={{ zIndex: 10, transform: [{ translateY }] }}>
      <View
        testID="wrapper"
        ref={childrenRef}
        onLayout={({
          nativeEvent: {
            layout: { height },
          },
        }) => {
          setChildrenHeight(height);
          translateY.setValue(height);
        }}
      >
        {children}
      </View>
    </Wrapper>
  );
});

SnackbarAnimationWrapper.propTypes = propTypes;

SnackbarAnimationWrapper.defaultProps = {
  onSnackbarClose: undefined,
};

export default SnackbarAnimationWrapper;
