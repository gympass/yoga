import React from 'react';
import { animated, useSpring } from 'react-spring';
import { node, oneOf, bool, shape } from 'prop-types';

import { slide } from './motions';

const Motion = ({
  children: {
    type,
    props: { style, ...props },
  },
  animation,
}) => {
  const Animated = animated(type);
  const spring = useSpring(slide.up(animation.when));

  return (
    <Animated
      {...props}
      style={{
        ...(Array.isArray(style) ? Object.assign({}, ...style) : style),
        ...spring,
      }}
    />
  );
};

Motion.propTypes = {
  children: node.isRequired,
  animation: shape({
    name: oneOf(['fade', 'slide']),
    direction: oneOf(['up', 'down', 'left', 'right']),
    when: bool,
  }).isRequired,
};

Motion.displayName = 'Motion';

export default Motion;
