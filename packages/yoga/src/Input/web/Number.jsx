import React, { forwardRef } from 'react';
import Input from './Input';

const InputNumber = forwardRef((props, ref) => (
  <Input ref={ref} {...props} type="number" />
));

export default InputNumber;
