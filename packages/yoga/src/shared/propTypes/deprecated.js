/* eslint-disable no-console */

const deprecated = (propType, explanation) => {
  return function validate(props, propName, componentName, ...rest) {
    if (props[propName] != null) {
      const message = `"${propName}" property of "${componentName}" has been deprecated.\n${explanation}`;
      console.warn(message);
    }

    return propType(props, propName, componentName, ...rest);
  };
};

export default deprecated;
