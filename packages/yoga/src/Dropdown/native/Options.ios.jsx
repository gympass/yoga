import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { func, arrayOf, string, shape, oneOfType, number } from 'prop-types';
import { Picker } from '@react-native-picker/picker';
import Button from '../../Button';

const PickerStyled = styled(Picker)`
  width: 100%;
  height: 190px;
`;

const PickerActions = styled.View`
  ${({
    theme: {
      yoga: {
        components: { dropdown },
      },
    },
  }) => `
    flex-direction: row;
    justify-content: space-between;

    padding:
      ${dropdown.backdrop.content.actions.padding.top}px
      ${dropdown.backdrop.content.actions.padding.right}px
      ${dropdown.backdrop.content.actions.padding.bottom}px
      ${dropdown.backdrop.content.actions.padding.left}px;
  `}
`;

const Options = ({
  options,
  selectedOption = null,
  cancelActionLabel,
  confirmActionLabel,
  onSelect = () => {},
  onClose = () => {},
  theme: {
    yoga: { baseFont },
  },
}) => {
  const [selected, setSelected] = useState(selectedOption);

  return (
    <>
      <PickerStyled
        selectedValue={selected && selected.value}
        onValueChange={itemValue =>
          setSelected(options.find(option => option.value === itemValue))
        }
        itemStyle={{
          fontFamily: baseFont.family,
        }}
      >
        {options.map(item => (
          <Picker.Item key={item} {...item} />
        ))}
      </PickerStyled>

      <PickerActions>
        <Button.Link onPress={onClose}>{cancelActionLabel}</Button.Link>
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

export default withTheme(Options);
