import React from 'react';
import Input from './Input';

const InputNumber = React.forwardRef((props, ref) => {
  return <Input ref={ref} {...props} keyboardType="numeric" />;
});

export default InputNumber;
