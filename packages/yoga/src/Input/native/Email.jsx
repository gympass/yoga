import React from 'react';
import Input from './Input';

const Email = (props) => (
  <Input
    {...props}
    autoCompleteType="email"
    autoCapitalize="none"
    keyboardType="email-address"
    textContentType="emailAddress"
  />
);

export default Email;
