import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { arrayOf, func, shape, string, bool } from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';

import { Arrow } from '@gympass/yoga-icons';

import Options from './Options';
import Backdrop from './Backdrop';

const Selector = styled.View`
  ${({
    disabled,
    selected,
    theme: {
      yoga: {
        components: { dropdown },
      },
    },
  }) => `
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: ${dropdown.width}px;
    padding: ${dropdown.selector.padding.top}px 
      ${dropdown.selector.padding.right}px 
      ${dropdown.selector.padding.bottom}px
      ${dropdown.selector.padding.left}px;

    background-color: ${dropdown.selector.background};
    border-radius: ${dropdown.selector.border.radius}px;
    border: 1px solid ${dropdown.selector.border.color};
    ${
      disabled
        ? `border-color: ${dropdown.disabled.selector.border.color};`
        : ''
    };
    ${
      selected
        ? `border-color: ${dropdown.selected.selector.border.color};`
        : ''
    };
  `}
`;

const Label = styled.Text`
  ${({
    disabled,
    selected,
    theme: {
      yoga: {
        components: { dropdown },
      },
    },
  }) => `
    color: ${dropdown.input.font.color};
    ${disabled ? `color: ${dropdown.disabled.input.font.color};` : ''}
    ${selected ? `color: ${dropdown.selected.input.font.color};` : ''}
  `}
`;

const getSelectedOption = options => {
  const filteredOptions = options.filter(item => item.selected === true);
  return filteredOptions.length > 0 ? filteredOptions[0] : null;
};

const Dropdown = ({
  label,
  disabled,
  options,
  cancelActionLabel,
  confirmActionLabel,
  onChange,
  theme: {
    yoga: {
      colors: { primary },
      components: { dropdown },
    },
  },
  ...rest
}) => {
  const [selected, setSelected] = useState(getSelectedOption(options));
  const [isOpen, setIsOpen] = useState(false);

  const iconColor = () => {
    if (disabled) return dropdown.disabled.arrow.fill;
    if (selected) return primary[3];
    return dropdown.arrow.fill;
  };

  return (
    <>
      <TouchableWithoutFeedback
        accessibilityRole="button"
        onPress={() => !disabled && setIsOpen(true)}
      >
        <Selector disabled={disabled} selected={selected} {...rest}>
          <Label disabled={disabled} selected={selected}>
            {selected ? selected.label : label}
          </Label>
          <Arrow fill={iconColor()} />
        </Selector>
      </TouchableWithoutFeedback>

      <Backdrop visible={isOpen} title={label} onClose={() => setIsOpen(false)}>
        <Options
          options={options}
          selectedOption={selected}
          cancelActionLabel={cancelActionLabel}
          confirmActionLabel={confirmActionLabel}
          onClose={() => setIsOpen(false)}
          onSelect={item => {
            setSelected(item);
            onChange(item);
            setIsOpen(false);
          }}
        />
      </Backdrop>
    </>
  );
};

Dropdown.propTypes = {
  label: string,
  disabled: bool,
  options: arrayOf(
    shape({
      label: string,
      value: string,
    }),
  ).isRequired,
  cancelActionLabel: string,
  confirmActionLabel: string,
  onChange: func,
};

Dropdown.defaultProps = {
  label: '',
  cancelActionLabel: 'Cancel',
  confirmActionLabel: 'Confirm',
  disabled: false,
  onChange: () => {},
};

export default withTheme(Dropdown);
