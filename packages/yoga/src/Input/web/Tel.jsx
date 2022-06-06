import React from 'react';
import Input from './Input';

const Tel = React.forwardRef((props, ref) => (
  <Input ref={ref} {...props} type="tel" />
));

export default Tel;
