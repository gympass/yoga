import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Visibility, VisibilityOff } from '@gympass/yoga-icons';

import Input from './Input';

const InlineBlock = styled.div`
  display: inline-block;
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  ${({
    theme: {
      yoga: { spacing },
    },
  }) => `
    svg {
      top: ${spacing.xsmall}px;
      right: ${spacing.xsmall}px;
      height: calc(100% - ${spacing.xsmall * 2}px);
    }  
  `}
`;

const Password = props => {
  const [showPassword, toggleShowPassword] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const { current: element } = inputRef;

    element.setSelectionRange(element.value.length, element.value.length);
  }, [showPassword]);

  const onClick = element => {
    element.focus();
    toggleShowPassword(!showPassword);
  };

  return (
    <InlineBlock>
      <Wrapper>
        <Input
          {...props}
          ref={inputRef}
          cleanable={false}
          type={showPassword ? 'text' : 'password'}
        />

        {showPassword ? (
          <Visibility onClick={() => onClick(inputRef.current)} />
        ) : (
          <VisibilityOff onClick={() => onClick(inputRef.current)} />
        )}
      </Wrapper>
    </InlineBlock>
  );
};

export default Password;
