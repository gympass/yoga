import React from 'react';
import Input from './Input';

const Email = React.forwardRef((props, ref) => {
  return <Input ref={ref} {...props} type="email" />;
});

export default Email;
