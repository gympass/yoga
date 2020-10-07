import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { bool, string, shape } from 'prop-types';
import { Visibility, VisibilityOff } from '@gympass/yoga-icons';

import Input from './Input';

const ICON_SIZE = 24;

const StyledInput = styled(Input)`
  ${({
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) => `
    input {
      padding-right: ${ICON_SIZE + input.padding.right}px;
    }
  `}
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  ${({ full }) => `
    ${full ? 'width: 100%;' : ''}
  `}
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
    top: 8px;
    right: 0;

    padding-right: ${spacing.small}px;
    padding-left: ${spacing.xxsmall}px;

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
      width: 20px;
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

const Password = ({ disabled, style, className, full, ...props }) => {
  const [showPassword, toggleShowPassword] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const { current: element } = inputRef;

    if (element.value.length) {
      element.setSelectionRange(element.value.length, element.value.length);
    }
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
    <Wrapper style={style} className={className} full={full}>
      <StyledInput
        {...props}
        disabled={disabled}
        full={full}
        ref={inputRef}
        cleanable={false}
        type={showPassword ? 'text' : 'password'}
      />
      <IconWrapper
        tabIndex={disabled ? null : 0}
        onClick={togglePassword}
        onKeyDown={togglePassword}
        disabled={disabled}
        role="button"
      >
        {showPassword ? <Visibility /> : <VisibilityOff />}
      </IconWrapper>
    </Wrapper>
  );
};

Password.propTypes = {
  className: string,
  disabled: bool,
  full: bool,
  style: shape({}),
};

Password.defaultProps = {
  className: undefined,
  disabled: false,
  full: false,
  style: undefined,
};

export default Password;
