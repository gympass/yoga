import React, { forwardRef } from 'react';
import Input from './Input';

const Tel = forwardRef((props, ref) => (
  <Input ref={ref} {...props} type="tel" />
));

export default Tel;
