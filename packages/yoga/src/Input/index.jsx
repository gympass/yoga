import React from 'react';
import { Input, Password } from './web';

Input.Password = Password;
Input.Email = props => <Input {...props} type="email" />;
Input.Number = props => <Input {...props} type="number" />;
Input.Tel = props => <Input {...props} type="tel" />;

export default Input;
