import React from 'react';
import PropTypes from 'prop-types';

const VisuallyHidden = ({ children, ...delegated }) => {
  return (
    <span
      className="visually-hidden"
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        whiteSpace: 'nowrap',
      }}
      {...delegated}
    >
      {children}
    </span>
  );
};

VisuallyHidden.propTypes = {
  children: PropTypes.node.isRequired,
};

export default VisuallyHidden;
