import React from 'react';
import styled from 'styled-components';
import { string, bool, number, func, shape } from 'prop-types';

import Input from '../../Input';

const StyledInput = styled(Input)`
  min-height: 88px;

  textarea {
    resize: none;

    ::-webkit-scrollbar {
      width: 15px;
      height: 18px;
    }
    ::-webkit-scrollbar-thumb {
      background-clip: padding-box;

      ${({
        theme: {
          yoga: { radii, colors },
        },
      }) => `
        background-color: ${colors.gray[5]}
        border: 4px solid ${colors.white};
        border-radius: ${radii.circle}px;
      `}
    }
  }
`;

/**
 * TextArea component represents a multi-line plain-text editing control,
 * useful when you want to allow users to enter a sizeable amount of free-form
 * text, for example a comment on a review or feedback form.
 */
const TextArea = ({ label, ...props }) => (
  <StyledInput
    {...props}
    label={label}
    forwardedAs="textarea"
    cleanable={false}
    resizable={false}
  />
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
  readOnly: bool,
  style: shape({}),
  value: string,
  onChange: func,
};

TextArea.defaultProps = {
  className: undefined,
  disabled: false,
  error: undefined,
  full: false,
  helper: undefined,
  label: 'Label',
  maxLength: undefined,
  readOnly: false,
  style: undefined,
  value: undefined,
  onChange: () => {},
};

export default TextArea;
