import React from 'react';
import {
  string,
  func,
  oneOfType,
  number,
  bool,
  node,
  object,
} from 'prop-types';
import styled from 'styled-components';

import RadioGroupContext from '../RadioGroupContext';

const Group = styled.div.attrs({
  role: 'radiogroup',
})`
  width: min-content;
  display: flex;
  border-style: solid;

  ${({
    theme: {
      components: {
        radioGroup: {
          radii,
          border: { width: borderWidth, color: borderColors },
        },
      },
    },
    full,
  }) => `
    border-radius: ${radii}px;
    border-width: ${borderWidth}px;
    border-color: ${borderColors};

    ${full ? `width: 100%;` : ``}
  `}
`;

const RadioGroup = ({
  name,
  onChange,
  selectedValue,
  small,
  full,
  children,
  style,
  ...rest
}) => (
  <RadioGroupContext.Provider
    value={{
      selectedValue,
      name,
      onChange,
      small,
      ...rest,
    }}
  >
    <Group full={full} children={children} style={style} {...rest} />
  </RadioGroupContext.Provider>
);

RadioGroup.propTypes = {
  name: string,
  onChange: func,
  selectedValue: oneOfType([string, number]),
  small: bool,
  full: bool,
  children: node,
  style: object,
};

RadioGroup.defaultProps = {
  name: '',
  onChange: () => {},
  selectedValue: '',
  small: false,
  full: false,
  children: null,
  style: {},
};

export default RadioGroup;
