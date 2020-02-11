import { checkPropTypes } from 'prop-types';

const charLength = (length, proptypes) => (props, propName, componentName) => {
  const MAX_CHARS = length;
  const { [propName]: valueProp } = props;

  checkPropTypes({ [propName]: proptypes }, props, 'prop', componentName);

  if (!isNaN(valueProp) && valueProp.toString().length > MAX_CHARS) {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName}. ${propName} must have up to ${MAX_CHARS} characters`,
    );
  }

  return null;
};

export default charLength;
