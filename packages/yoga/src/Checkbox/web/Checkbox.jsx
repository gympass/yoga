import React, { useState } from 'react';
import { bool, func, string, objectOf, any } from 'prop-types';
import styled from 'styled-components';
import CheckMark from './CheckMark';

const CheckboxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const CheckboxStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;

const Label = styled.label(
  ({
    theme: {
      components: { checkbox },
    },
  }) => `
  padding-left: ${checkbox.label.padding.left}px;
  font-size: ${checkbox.label.font.size}px;
  color: ${checkbox.label.font.color};
`,
);

const HelperWrapper = styled.div(
  ({
    theme: {
      components: { checkbox },
    },
  }) => `
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-top: ${checkbox.helper.margin.top}px;
`,
);

const Helper = styled.span(
  ({
    error,
    theme: {
      components: { checkbox },
    },
  }) => `
  font-size: ${checkbox.helper.font.size}px;
  color: ${
    error
      ? `${checkbox.helper.selected.font.color};`
      : `${checkbox.helper.font.color}`
  }
`,
);

const Checkbox = ({
  id,
  value,
  label,
  helper,
  disabled,
  checked,
  error,
  style,
  onChange,
  ...rest
}) => {
  const [hover, setHover] = useState(false);
  return (
    <CheckboxWrapper style={style}>
      <CheckboxStyled
        onClick={() => !disabled && onChange()}
        onMouseEnter={() => !disabled && setHover(true)}
        onMouseLeave={() => !disabled && setHover(false)}
        {...rest}
      >
        <CheckMark
          id={id}
          value={value}
          hovered={hover}
          disabled={disabled}
          checked={checked}
          error={error}
        />
        <Label htmlFor={id}>{label}</Label>
      </CheckboxStyled>
      {helper && (
        <HelperWrapper>
          <Helper error={error}>{helper}</Helper>
        </HelperWrapper>
      )}
    </CheckboxWrapper>
  );
};

Checkbox.propTypes = {
  /** set the checkbox input id */
  id: string.isRequired,
  /** set the checkbox input value */
  value: string.isRequired,
  /** set the checkbox input label */
  label: string.isRequired,
  /** set a short helper text under checkbox */
  helper: string,
  /** set a checked state in the checkbox input */
  checked: bool,
  /** set a disabled state in the checkbox input */
  disabled: bool,
  /** set a error state in the component */
  error: bool,
  /** set a style to the checkbox container */
  style: objectOf(any),
  /** when the checkbox is checked/unchecked */
  onChange: func,
};

Checkbox.defaultProps = {
  helper: undefined,
  checked: false,
  disabled: false,
  error: false,
  style: undefined,
  onChange: () => {},
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
