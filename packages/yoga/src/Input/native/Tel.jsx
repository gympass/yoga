import React from 'react';
import Input from './Input';

const Tel = React.forwardRef((props, ref) => (
  <Input
    ref={ref}
    {...props}
    keyboardType="phone-pad"
    autoCompleteType="tel"
    textContentType="telephoneNumber"
  />
));

export default Tel;
