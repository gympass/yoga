import React from 'react';
import { string, func, oneOfType, number, bool, node, shape } from 'prop-types';
import styled from 'styled-components';

import RadioGroupContext from '../RadioGroupContext';

const Group = styled.div.attrs({
  role: 'radiogroup',
})(
  ({
    theme: {
      yoga: {
        components: {
          radioGroup: {
            radii,
            border: { width: borderWidth, color: borderColors },
          },
        },
      },
    },
    full,
  }) => `
  width: min-content;
  display: flex;
  border-style: solid;

  border-radius: ${radii}px;
  border-width: ${borderWidth}px;
  border-color: ${borderColors};

  ${full ? `width: 100%;` : ``}
`,
);

/** Radio group allows user to select one option from a set of options. Use value on group to set the selected option. */
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
