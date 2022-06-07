import React from 'react';

const typeOf =
  ({ displayName: childType }) =>
  (props, propName, componentName) => {
    let error;
    const prop = props[propName];

    React.Children.forEach(prop, child => {
      if (child.type.displayName !== childType) {
        error = new Error(
          `"${componentName}" only accepts children of type "${childType}".`,
        );
      }
    });
    return error;
  };

export default typeOf;
