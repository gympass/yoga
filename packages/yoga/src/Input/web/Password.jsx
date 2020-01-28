import React from 'react';
import styled, { css, withTheme } from 'styled-components';
import { func, string } from 'prop-types';
import { Visibility, VisibilityOff } from '@gympass/yoga-icons';

import Input from './Input';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  svg {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

const Password = ({
  theme: {
    yoga: { colors },
  },
  ...props
}) => {
  const [showPassword, toggleShowPassword] = React.useState(false);

  return (
    <Wrapper>
      <Input {...props} type={showPassword ? 'text' : 'password'} />

      {showPassword ? (
        <Visibility
          onClick={() => toggleShowPassword(false)}
          width={20}
          height={20}
          fill={colors.gray[7]}
        />
      ) : (
        <VisibilityOff
          onClick={() => toggleShowPassword(true)}
          width={20}
          height={20}
          fill={colors.gray[7]}
        />
      )}
    </Wrapper>
  );
};

export default withTheme(Password);
