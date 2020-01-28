import React from 'react';
import styled, { css } from 'styled-components';
import { func, string } from 'prop-types';
import { Visibility, VisibilityOff } from '@gympass/yoga-icons';

import Input from './Input';

const Wrapper = styled.div`
  svg {
    cursor: pointer;
  }
`;

const Password = props => {
  const [showPassword, toggleShowPassword] = React.useState(false);

  return (
    <Wrapper>
      <Input {...props} type={showPassword ? 'text' : 'password'} />

      {showPassword ? (
        <Visibility
          onClick={() => toggleShowPassword(false)}
          width={20}
          height={16}
        />
      ) : (
        <VisibilityOff
          onClick={() => toggleShowPassword(true)}
          width={20}
          height={11}
        />
      )}
    </Wrapper>
  );
};

export default Password;
