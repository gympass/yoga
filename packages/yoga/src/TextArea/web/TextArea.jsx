import React, { useRef } from 'react';
import styled from 'styled-components';
import { string, bool, number, func, shape } from 'prop-types';

import Input from '../../Input';

const StyledInput = styled(Input)`
  min-height: 88px;

  ${({
    theme: {
      yoga: {
        components: { textarea },
      },
    },
  }) => `
    width: ${textarea.width}px;

    padding-top: ${textarea.padding.top}px;
    padding-right: ${textarea.padding.right}px;
    padding-bottom: ${textarea.padding.bottom}px;
    padding-left: ${textarea.padding.left}px;

    border-radius: ${textarea.border.radius}px;
    border: ${textarea.border.width}px solid ${textarea.border.color.default};

    cursor: text;

    &:hover, &:focus-within { 
      border-color: ${textarea.border.color.typed};
    }
  `}

  && {
    textarea {
      width: 100%;
      padding: 0;

      border: none;
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

    label,
    textarea:focus + label {
      transform: translateY(calc(-50% - 1px));
    }
  }
`;

/**
 * Text Area are a type of text field witch has a larger initiation size to
 * encourage a bigger user input. This component has a fixed height and the text
 * lines are increased when the input reaches the limit of lines established for
 * the field. This action creates a vertical scroll inside the component.
 */
const TextArea = React.forwardRef(({ label, ...props }, ref) => {
  const textAreaRef = ref || useRef(null);

  return (
    // eslint-disable-next-line
    <div onClick={() => textAreaRef.current.focus()}>
      <StyledInput
        {...props}
        label={label}
        forwardedAs="textarea"
        ref={textAreaRef}
        cleanable={false}
        resizable={false}
      />
    </div>
  );
});

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
