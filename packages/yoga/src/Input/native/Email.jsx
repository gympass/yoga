import React from 'react';
import Input from './Input';

const Email = React.forwardRef((props, ref) => (
  <Input
    ref={ref}
    {...props}
    autoCompleteType="email"
    autoCapitalize="none"
    keyboardType="email-address"
    textContentType="emailAddress"
  />
));

export default Email;
