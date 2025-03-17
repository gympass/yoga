import React, { useRef, useLayoutEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import {
  arrayOf,
  func,
  string,
  bool,
  number,
  shape,
  oneOfType,
  node,
} from 'prop-types';
import { Close } from '@gympass/yoga-icons';

import { theme } from '../../Theme';
import Field from './Field';

import Helper from './Helper';

import Fieldset from './Fieldset';
import Legend from './Legend';
import Label from './Label';

const Control = styled.div`
  box-sizing: border-box;
  width: ${({ full }) =>
    full
      ? '100%'
      : css`
          ${theme.components.input.width}px
        `};
`;

const IconWrapper = styled.div`
  ${({
    disabled,
    hasIconRight = false,
    theme: {
      yoga: {
        colors,
        spacing,
        components: { input },
      },
    },
  }) => css`
    position: absolute;
    top: 0;
    right: ${hasIconRight ? spacing.large : 0}px;

    padding-right: ${spacing.small}px;
    padding-left: ${spacing.xxsmall}px;

    height: ${input.height}px;
    cursor: pointer;

    outline: none;

    &:hover svg,
    &:focus svg {
      fill: ${input.font.color.focus};
    }

    svg {
      height: ${input.height}px;
      width: 20px;
      fill: ${input.font.color.default};
    }

    ${disabled
      ? `
      cursor: not-allowed;
      pointer-events: none;
      svg {
        fill: ${colors.text.disabled};
      }
    `
      : ''}
  `}
`;

const LeftElementWrapper = styled.div`
  ${({
    theme: {
      yoga: { spacing },
    },
  }) => css`
    position: absolute;
    left: ${spacing.xxsmall}px;
    top: 50%;
    transform: translateY(-50%);
  `}
`;

const noop = () => {};

const Input = React.forwardRef(
  (
    {
      cleanable = true,
      children,
      disabled = false,
      error,
      full = false,
      helper,
      label,
      ariaLabel,
      maxLength,
      readOnly = false,
      style,
      value = '',
      onChange = noop,
      onClean = noop,
      hideMaxLength = false,
      rightIcon,
      a11yId,
      closeAriaLabel = 'Clear',
      includeAriaAttributes = true,
      leftElement,
      clearButtonAriaLabel = 'Clear',
      ...props
    },
    ref,
  ) => {
    const inputRef = ref || useRef(null);

    const cleanField = e => {
      if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();

        onClean('');

        inputRef.current.focus();
      }
    };

    const hasHelper = helper || maxLength || error;

    const helperA11yId = includeAriaAttributes && a11yId && `${a11yId}-helper`;
    const labelA11yId = includeAriaAttributes && a11yId && `${a11yId}-label`;
    let a11yFieldProps;

    const labelAria = ariaLabel || label;

    if (includeAriaAttributes) {
      a11yFieldProps = a11yId
        ? {
            ...(hasHelper && { 'aria-describedby': helperA11yId }),
            ...(label && { 'aria-labelledby': labelA11yId }),
          }
        : {
            ...(labelAria && { 'aria-label': labelAria }),
          };
      a11yFieldProps['aria-invalid'] = !!error;
    } else {
      a11yFieldProps = {};
    }

    const leftElementRef = useRef(null);
    const [leftElementTextIndent, setLeftElementTextIndent] = useState(0);

    useLayoutEffect(() => {
      if (leftElementRef.current) {
        setLeftElementTextIndent(`${leftElementRef.current.offsetWidth}px`);
      }
    }, [leftElement]);

    return (
      <Control full={full}>
        <Fieldset
          disabled={disabled}
          error={error}
          full={full}
          label={label}
          style={style}
          value={value}
        >
          {leftElement && (
            <LeftElementWrapper ref={leftElementRef}>
              {leftElement}
            </LeftElementWrapper>
          )}
          {!children ? (
            <Field
              {...props}
              {...{
                label,
                cleanable,
                disabled,
                error,
                full,
                readOnly,
                maxLength,
              }}
              ref={inputRef}
              value={value}
              onChange={onChange}
              {...a11yFieldProps}
              style={leftElement ? { textIndent: leftElementTextIndent } : {}}
            />
          ) : (
            children
          )}

          <Label
            error={error}
            disabled={disabled}
            {...(labelA11yId && { id: labelA11yId })}
          >
            {label}
          </Label>

          {label && <Legend>{label}</Legend>}
          {cleanable && !readOnly && value && (
            <IconWrapper
              tabIndex={0}
              disabled={disabled}
              onClick={cleanField}
              onKeyDown={cleanField}
              width={20}
              height={20}
              role="button"
              hasIconRight={!!rightIcon}
              aria-label={clearButtonAriaLabel}
              data-testid="clearButtonAriaLabel"
            >
              <Close aria-label={closeAriaLabel} />
            </IconWrapper>
          )}

          {!!rightIcon && !readOnly && (
            <IconWrapper
              tabIndex={0}
              disabled={disabled}
              width={20}
              height={20}
              role="button"
            >
              {rightIcon}
            </IconWrapper>
          )}
        </Fieldset>
        {hasHelper && (
          <Helper
            error={error}
            helper={helper}
            maxLength={maxLength}
            length={value.length}
            disabled={disabled}
            hideMaxLength={hideMaxLength}
            a11yId={helperA11yId}
          />
        )}
      </Control>
    );
  },
);

Input.propTypes = {
  className: string,
  /** a children node to override default input component */
  children: oneOfType([arrayOf(node), node]),
  /** display a close icon to clean the field */
  cleanable: bool,
  disabled: bool,
  error: string,
  full: bool,
  /** a helper text to be displayed below field */
  helper: string,
  label: string,
  ariaLabel: string,
  /** maximum length (number of characters) of value */
  maxLength: number,
  readOnly: bool,
  style: shape({}),
  value: oneOfType([string, number]),
  onChange: func,
  /** callback invoked when close icon is clicked, it returns a empty string to update your state */
  onClean: func,
  /** when max length helper is unnecessary to appear */
  hideMaxLength: bool,
  placeholder: string,
  rightIcon: node,
  /** a unique prefix to generate HTML IDs to be used for aria-labelledby and aria-describedby */
  a11yId: string,
  /** useful for components that extend the Input component and have their own ARIA attributes implementation (e.g. Dropdown) */
  includeAriaAttributes: bool,
  /** this prop will be used in the aria-label of the clear input button. */
  closeAriaLabel: string,

  /** element on the left */
  leftElement: node,
  /** aria label for close button */
  clearButtonAriaLabel: string,
};

export default Input;
