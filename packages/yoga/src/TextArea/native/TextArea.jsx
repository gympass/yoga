import React from 'react';
import styled from 'styled-components';
import { bool, func, number, string } from 'prop-types';

import Input from '../../Input';

const StyledInput = styled(Input)`
  height: 88px;
`;

/**
 * Text Area is a type of text field which has a larger initiation size to
 * encourage a bigger user input. This component has a fixed height and the text
 * lines are increased when the input reaches the limit of lines established for
 * the field. This action creates a vertical scroll inside the component.
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
  label: '',
  maxLength: undefined,
  readOnly: false,
  value: '',
  onBlur: () => {},
  onChangeText: () => {},
  onFocus: () => {},
};

export default TextArea;
