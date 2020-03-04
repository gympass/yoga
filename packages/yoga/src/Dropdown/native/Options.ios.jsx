import React, { useState } from 'react';
import styled from 'styled-components';
import { func, arrayOf, string, shape, oneOfType, number } from 'prop-types';
import { Picker } from 'react-native';
import { Button } from '@gympass/yoga';

const PickerStyled = styled.Picker`
  width: 100%;
  height: 190px;
`;

const PickerActions = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding: 0px 20px 20px 20px;
`;

const Options = ({
  options,
  selectedOption,
  cancelActionLabel,
  confirmActionLabel,
  onSelect,
  onClose,
}) => {
  const [selected, setSelected] = useState(selectedOption);
  return (
    <>
      <PickerStyled
        selectedValue={selected && selected.label}
        onValueChange={(itemValue, itemIndex) =>
          setSelected({ label: itemValue, value: itemIndex })
        }
      >
        {options.map(item => (
          <Picker.Item key={item} {...item} />
        ))}
      </PickerStyled>

      <PickerActions>
        <Button.Link onPress={() => onClose()}>{cancelActionLabel}</Button.Link>
        <Button.Link onPress={() => onSelect(selected)}>
          {confirmActionLabel}
        </Button.Link>
      </PickerActions>
    </>
  );
};

const optionShape = {
  label: string,
  value: oneOfType([string, number]),
};

Options.propTypes = {
  options: arrayOf(shape(optionShape)).isRequired,
  selectedOption: shape(optionShape),
  cancelActionLabel: string.isRequired,
  confirmActionLabel: string.isRequired,
  onSelect: func,
  onClose: func,
};

Options.defaultProps = {
  selectedOption: null,
  onSelect: () => {},
  onClose: () => {},
};

export default Options;
