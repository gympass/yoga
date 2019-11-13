import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';

const CheckboxWrapper = styled.TouchableOpacity`
  width: 200px;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
`;

const CheckboxStyled = styled.View(
  ({
    checked,
    disabled,
    theme: {
      components: { checkbox },
    },
  }) => `
  display: flex;
  width: ${checkbox.width}px;
  height: ${checkbox.height}px;
  border-radius: ${checkbox.border.radii}px;
  border-width: ${checkbox.border.width}px;
  border-style: solid;

  ${checked ? `background-color: ${checkbox.checked.background};` : ``}

  ${
    disabled
      ? `border-color: ${checkbox.disabled.border.color};`
      : `border-color: ${checkbox.border.color};`
  }

  ${
    checked && disabled
      ? `background-color: ${checkbox.disabled.background};`
      : ``
  }

`,
);

const Label = styled.Text`
  display: flex;
  align-items: center;
  padding-left: 8px;

  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  color: #41414a;
`;

const HelperWrapper = styled.View`
  width: 200px;
  margin-top: 4px;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const Helper = styled.Text`
  display: flex;
  align-items: center;
  align-self: flex-start;

  font-size: 14px;
  letter-spacing: 0.5px;
  color: #9898a6;
`;

const Checkbox = ({ disabled, onChange, ...rest }) => {
  return (
    <>
      <CheckboxWrapper onPress={onChange}>
        <CheckboxStyled disabled={disabled} {...rest} />
        <Label>Checkbox Label</Label>
      </CheckboxWrapper>

      <HelperWrapper>
        <Helper>Helper text</Helper>
      </HelperWrapper>
    </>
  );
};

Checkbox.propTypes = {
  checked: bool,
  disabled: bool,
  onChange: func,
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  onChange: () => {},
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
