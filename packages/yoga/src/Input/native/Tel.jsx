import React from 'react';
import Input from './Input';

const Tel = (props) => (
  <Input
    {...props}
    keyboardType="phone-pad"
    autoCompleteType="tel"
    textContentType="telephoneNumber"
  />
);

export default Tel;
