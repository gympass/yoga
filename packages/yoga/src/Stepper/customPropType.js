import { number, checkPropTypes } from 'prop-types';

const customPropType = (props, propName, componentName) => {
  const { children, [propName]: activeStep } = props;

  checkPropTypes({ [propName]: number }, props, 'prop', componentName);

  if (activeStep > children.length - 1) {
    return new Error(
      `Invalid prop "${propName}" supplied to "${componentName}". "${propName}" must be smaller or equal the number of children.`,
    );
  }

  return null;
};

export default customPropType;
