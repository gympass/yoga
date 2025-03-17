import React, { useState } from 'react';
import styled, { withTheme } from 'styled-components';
import {
  arrayOf,
  func,
  shape,
  number,
  string,
  bool,
  oneOfType,
} from 'prop-types';
import { TouchableWithoutFeedback, View } from 'react-native';
import { ChevronDown } from '@gympass/yoga-icons';

import Options from './Options';
import Backdrop from './Backdrop';
import Text from '../../Text';
import Helper from '../../Input/native/Helper';

const Selector = styled.View`
  ${({
    disabled,
    selected,
    error,
    full,
    theme: {
      yoga: {
        colors,
        components: { dropdown },
      },
    },
  }) => `
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: ${full ? '100%' : `${dropdown.width}px`};
    padding: ${dropdown.selector.padding.top}px
      ${dropdown.selector.padding.right}px
      ${dropdown.selector.padding.bottom}px
      ${dropdown.selector.padding.left}px;

    background-color: ${dropdown.selector.background};
    border-radius: ${dropdown.selector.border.radius}px;
    border-width: ${dropdown.selector.border.width}px;
    border-style: solid;
    border-color: ${
      error ? colors.feedback.attention[1] : dropdown.selector.border.color
    };

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

const Label = styled(Text.Body2)`
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

const getSelectedOption = options =>
  options.find(item => item.selected === true);

/** Gympass Dropdown is a multiple choice type of menu. */
const Dropdown = React.forwardRef(
  (
    {
      error = undefined,
      label = '',
      disabled = false,
      full = false,
      options,
      cancelActionLabel = 'Cancel',
      confirmActionLabel = 'Confirm',
      onChange = () => {},
      theme: {
        yoga: {
          components: { dropdown },
        },
      },
      ...rest
    },
    ref,
  ) => {
    const [selected, toggleIsSelected] = useState(getSelectedOption(options));
    const [isOpen, toggleIsOpen] = useState(false);

    const iconColor = () => {
      if (disabled) return dropdown.disabled.arrow.fill;
      if (selected) return dropdown.selected.arrow.fill;
      return dropdown.arrow.fill;
    };

    return (
      <>
        <TouchableWithoutFeedback
          accessibilityRole="button"
          onPress={() => !disabled && toggleIsOpen(true)}
        >
          <View>
            <Selector
              full={full}
              disabled={disabled}
              selected={selected}
              error={error}
              {...rest}
              ref={ref}
            >
              <Label disabled={disabled} selected={selected}>
                {(selected && selected.label) || label}
              </Label>
              <ChevronDown width={20} height={20} fill={iconColor()} />
            </Selector>
            {error && !selected && <Helper error={error} />}
          </View>
        </TouchableWithoutFeedback>

        <Backdrop
          visible={isOpen}
          title={label}
          onClose={() => toggleIsOpen(false)}
        >
          <Options
            options={options}
            selectedOption={selected}
            cancelActionLabel={cancelActionLabel}
            confirmActionLabel={confirmActionLabel}
            onClose={() => toggleIsOpen(false)}
            onSelect={item => {
              toggleIsSelected(item);
              onChange(item);
              toggleIsOpen(false);
            }}
          />
        </Backdrop>
      </>
    );
  },
);

Dropdown.propTypes = {
  label: string,
  disabled: bool,
  error: string,
  full: bool,
  /** { label (string), value (string or number), selected: (boolean) } */
  options: arrayOf(
    shape({
      label: string,
      value: oneOfType([string, number]),
      selected: bool,
    }),
  ).isRequired,
  /** Cancel label that will be shown in iOS option chooser */
  cancelActionLabel: string,
  /** Confirm label that will be shown in iOS option chooser */
  confirmActionLabel: string,
  onChange: func,
};

export default withTheme(Dropdown);
