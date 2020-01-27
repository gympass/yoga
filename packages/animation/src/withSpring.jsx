import React from 'react';
import { animated } from 'react-spring';
import { Spring } from 'react-spring/renderprops';

const withSpring = Component => config => ({ style, ...props }) => {
  const Animated = animated(Component);

  return (
    <Spring {...config}>
      {springProps => (
        <Animated
          {...props}
          style={{
            ...(Array.isArray(style) ? Object.assign({}, ...style) : style),
            ...springProps,
          }}
        />
      )}
    </Spring>
  );
};

export default withSpring;
