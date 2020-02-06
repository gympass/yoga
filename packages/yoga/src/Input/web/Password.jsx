import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { bool, string, shape } from 'prop-types';
import { Visibility, VisibilityOff } from '@gympass/yoga-icons';

import Input from './Input';

const InlineBlock = styled.div`
  display: inline-block;
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const IconWrapper = styled.div`
  ${({
    disabled,
    theme: {
      yoga: {
        colors,
        spacing,
        components: { input },
      },
    },
  }) => `
    position: absolute;
    top: 0;
    right: 0;

    padding-right: ${spacing.xsmall}px;
    padding-left: ${spacing.xsmall}px;

    height: ${input.height}px;
    cursor: pointer;

    outline: none;

    &:hover svg, &:focus svg {
      fill: ${input.font.color.focus};
    }

    ${
      disabled
        ? `
      cursor: not-allowed;
      pointer-events: none;
    `
        : ''
    }

    svg {
      height: ${input.height}px;
      fill: ${input.font.color.default};

      ${
        disabled
          ? `
            fill: ${colors.disabled.background};
            pointer-events: none;`
          : ''
      }  
    }
  `}
`;

const Password = ({ disabled, style, className, ...props }) => {
  const [showPassword, toggleShowPassword] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const { current: element } = inputRef;

    element.setSelectionRange(element.value.length, element.value.length);
  }, [showPassword]);

  const togglePassword = e => {
    if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleShowPassword(!showPassword);
    }

    if (e.type === 'click') {
      inputRef.current.focus();
    }
  };

  return (
    <InlineBlock style={style} className={className}>
      <Wrapper>
        <Input
          {...props}
          disabled={disabled}
          ref={inputRef}
          cleanable={false}
          type={showPassword ? 'text' : 'password'}
        />

        <IconWrapper
          tabIndex={disabled ? null : 0}
          onClick={togglePassword}
          onKeyDown={togglePassword}
          disabled={disabled}
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconWrapper>
      </Wrapper>
    </InlineBlock>
  );
};

Password.propTypes = {
  className: string,
  disabled: bool,
  style: shape({}),
};

Password.defaultProps = {
  className: undefined,
  disabled: false,
  style: undefined,
};

export default Password;
