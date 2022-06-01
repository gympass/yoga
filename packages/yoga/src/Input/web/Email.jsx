import React, { forwardRef } from 'react';
import Input from './Input';

const Email = forwardRef((props, ref) => (
  <Input ref={ref} {...props} type="email" />
));

export default Email;
