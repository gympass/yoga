import React from 'react';
import Input from './Input';

const InputNumber = React.forwardRef((props, ref) => {
  return <Input ref={ref} {...props} type="number" />;
});

export default InputNumber;
