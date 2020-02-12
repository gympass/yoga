import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

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
}
`;

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
  label: string,
};

TextArea.defaultProps = {
  label: '',
};

export default TextArea;
