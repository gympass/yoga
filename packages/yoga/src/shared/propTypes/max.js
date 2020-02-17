import { checkPropTypes, number } from 'prop-types';

const max = (value, proptypes = number) => (props, propName, componentName) => {
  const { [propName]: valueProp } = props;

  checkPropTypes({ [propName]: proptypes }, props, 'prop', componentName);

  if (valueProp > value) {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName}. ${propName} must be a value with maximun of ${value}`,
    );
  }

  return null;
};

export default max;
