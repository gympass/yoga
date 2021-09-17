import warning from 'warning';

let warned = {};

export default function deprecated(propType, explanation) {
  return function validate(props, propName, componentName, ...rest) {
    if (props[propName] != null) {
      const message = `"${propName}" property of "${componentName}" has been deprecated.\n${explanation}`;
      if (!warned[message]) {
        warning(false, message);
        warned[message] = true;
      }
    }

    return propType(props, propName, componentName, ...rest);
  };
}

function resetWarned() {
  warned = {};
}

deprecated.resetWarned = resetWarned;
