import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { string, bool, number, func, shape } from 'prop-types';

import FieldSet from '../../Input/web/Fieldset';
import Field from '../../Input/web/Field';
import Label from '../../Input/web/Label';
import Legend from '../../Input/web/Legend';
import Helper from '../../Input/web/Helper';

const Root = styled.div`
  display: inline-block;

  cursor: text;

  ${({ full }) => `
    width: ${full ? '100%' : 'auto'};
  `}
`;

const StyledFieldSet = styled(FieldSet)`
  height: 88px;
  box-sizing: border-box;
`;

const StyledField = styled(Field)`
  resize: none;
  height: 100%;
`;

const noop = () => {};

/**
 * TextArea is a type of text field which has a larger initiation size to
 * encourage a bigger user input. This component has a fixed height and the text
 * lines are increased when the input reaches the limit of lines established for
 * the field. This action creates a vertical scroll inside the component.
 */
const TextArea = React.forwardRef(
  (
    {
      disabled = false,
      error,
      full = false,
      helper,
      label = '',
      maxLength,
      className,
      style,
      value = '',
      onChange = noop,
      readOnly = false,
      ...props
    },
    ref,
  ) => {
    const [textAreaValue, setTextAreaValue] = useState(value);
    const [typed, setTyped] = useState(Boolean(value));

    const textAreaRef = ref || useRef(null);

    useEffect(() => {
      setTextAreaValue(value);
      setTyped(Boolean(value));
    }, [value]);

    return (
      <Root
        className={className}
        full={full}
        style={style}
        onClick={() => textAreaRef.current.focus()}
      >
        <StyledFieldSet
          error={error}
          disabled={disabled}
          full={full}
          label={label}
        >
          <StyledField
            {...props}
            readOnly={readOnly}
            disabled={disabled}
            full={full}
            label={label}
            as="textarea"
            ref={textAreaRef}
            cleanable={false}
            maxLength={maxLength}
            typed={typed}
            error={error}
            value={textAreaValue}
            onChange={e => {
              setTextAreaValue(e.target.value);
              setTyped(Boolean(e.target.value));
              onChange(e);
            }}
          />

          <Label error={error} disabled={disabled} {...props}>
            {label}
          </Label>

          {label && <Legend>{label}</Legend>}
        </StyledFieldSet>
        <Helper
          disabled={disabled}
          error={error}
          helper={helper}
          maxLength={maxLength}
          length={textAreaValue.length}
        />
      </Root>
    );
  },
);

TextArea.propTypes = {
  className: string,
  disabled: bool,
  /** A error text to be displayed below field */
  error: string,
  full: bool,
  /** A helper text to be displayed below field */
  helper: string,
  label: string,
  /** maximum length (number of characters) of value */
  maxLength: number,
  placeholder: string,
  readOnly: bool,
  style: shape({}),
  value: string,
  onChange: func,
};

export default TextArea;
