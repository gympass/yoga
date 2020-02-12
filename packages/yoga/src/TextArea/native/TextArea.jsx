import React from 'react';
import styled from 'styled-components';
import { bool, func, number, string } from 'prop-types';

import Input from '../../Input';

const StyledInput = styled(Input)`
  height: 88px;
`;

const TextArea = props => (
  <StyledInput {...props} textAlignVertical="top" multiline cleanable={false} />
);

TextArea.propTypes = {
  disabled: bool,
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
  /** callback invoked when close icon is clicked */
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
