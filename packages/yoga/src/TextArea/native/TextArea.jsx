import React from 'react';
import styled from 'styled-components';
import { bool, func, number, string } from 'prop-types';

import Input from '../../Input';

const StyledInput = styled(Input)`
  height: 88px;
`;

/**
 * TextArea component represents a multi-line plain-text editing control,
 * useful when you want to allow users to enter a sizeable amount of free-form
 * text, for example a comment on a review or feedback form.
 */
const TextArea = props => (
  <StyledInput {...props} textAlignVertical="top" multiline cleanable={false} />
);

TextArea.propTypes = {
  disabled: bool,
  /** A error text to be displayed below field */
  error: string,
  full: bool,
  /** A helper text to be displayed below field */
  helper: string,
  label: string,
  /** maximum length (number of characters) of value */
  maxLength: number,
  readOnly: bool,
  value: string,
  onBlur: func,
  onChangeText: func,
  onFocus: func,
};

TextArea.defaultProps = {
  disabled: false,
  error: undefined,
  full: false,
  helper: undefined,
  label: undefined,
  maxLength: undefined,
  readOnly: false,
  value: undefined,
  onBlur: () => {},
  onChangeText: () => {},
  onFocus: () => {},
};

export default TextArea;
