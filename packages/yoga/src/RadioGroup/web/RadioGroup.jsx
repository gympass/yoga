import React from 'react';
import { string, func, oneOfType, number, bool, node, shape } from 'prop-types';
import styled from 'styled-components';

import RadioGroupContext from '../RadioGroupContext';

const Group = styled.div.attrs({
  role: 'radiogroup',
})`
  display: flex;

  width: min-content;

  ${({ full }) => `
    ${full ? `width: 100%;` : ``}
  `}
`;

const RadioGroup = ({
  name = '',
  onChange = () => {},
  selectedValue = '',
  small = false,
  full = false,
  children = null,
  style = {},
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
    <Group full={full} style={style} {...rest}>
      {children}
    </Group>
  </RadioGroupContext.Provider>
);

RadioGroup.propTypes = {
  name: string,
  onChange: func,
  selectedValue: oneOfType([string, number]),
  small: bool,
  full: bool,
  children: node,
  style: shape({}),
};

export default RadioGroup;
