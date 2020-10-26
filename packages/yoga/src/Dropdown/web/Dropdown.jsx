import React from 'react';
import styled from 'styled-components';
import Downshift from 'downshift';
import {
  arrayOf,
  func,
  shape,
  string,
  number,
  bool,
  oneOfType,
} from 'prop-types';
import { ChevronDown } from '@gympass/yoga-icons';

const Wrapper = styled.div`
  ${({
    full,
    theme: {
      yoga: {
        components: { dropdown },
      },
    },
  }) => `
    position: relative;
    display: inline-block;
    vertical-align: top;

    width: ${full ? '100%' : `${dropdown.width}px`};
  `}
`;

const Selector = styled.div`
  ${({
    disabled,
    selected,
    isOpen,
    theme: {
      yoga: {
        components: { dropdown },
      },
    },
  }) => `
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

    width: 100%;
    padding: ${dropdown.selector.padding.top}px
      ${dropdown.selector.padding.right}px
      ${dropdown.selector.padding.bottom}px
      ${dropdown.selector.padding.left}px;

    background-color: ${dropdown.selector.background};
    border-radius: ${dropdown.selector.border.radius}px;
    border-width: ${dropdown.selector.border.width}px;
    border-style: solid;
    border-color: ${dropdown.selector.border.color};

    &:hover{
      ${
        !disabled
          ? `border-color: ${dropdown.hover.selector.border.color};`
          : ''
      };
    }
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
    ${
      isOpen && !disabled
        ? `border-color: ${dropdown.hover.selector.border.color};`
        : ''
    }
  `}
`;

const Input = styled.input`
  ${({
    disabled,
    selected,
    theme: {
      yoga: {
        baseFont,
        components: { dropdown },
      },
    },
  }) => `
    width: 100%;
    padding: 0;

    background-color: transparent;
    border: none;

    font-family: ${baseFont.family};
    font-size: ${dropdown.input.font.size}px;
    line-height: ${dropdown.input.font.lineHeight}px;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};

    &, &::placeholder {
      color: ${dropdown.input.font.color};
      ${selected ? `color: ${dropdown.selected.input.font.color};` : ''}
      ${disabled ? `color: ${dropdown.disabled.input.font.color};` : ''}
    }
  `}
`;

const Button = styled.button`
  ${({
    disabled,
    theme: {
      yoga: {
        components: { dropdown },
      },
    },
  }) => `
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    padding-right: ${dropdown.button.padding.right}px;

    border: none;
    outline: none;
    background-color: transparent;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
  `}
`;

const OptionsList = styled.ul`
  ${({
    selected,
    theme: {
      yoga: {
        components: { dropdown },
      },
    },
  }) => `
    position: absolute;
    top: 46px;
    z-index: 1;
    box-sizing: border-box;

    width: 100%;
    max-height: ${dropdown.option.height * 3.5}px;
    margin: 0;
    padding: 0;
    overflow-y: auto;
    list-style-type: none;

    background: ${dropdown.optionsList.backgroundColor};
    border-width: ${dropdown.optionsList.border.width}px;
    border-style: solid;
    border-color: ${dropdown.optionsList.border.color};
    border-top: none;

    ${
      selected
        ? `border-color: ${dropdown.selected.optionsList.border.color};`
        : ''
    };

    border-radius:
        ${dropdown.option.border.radius.topLeft}px
        ${dropdown.option.border.radius.topRight}px
        ${dropdown.option.border.radius.bottomRight}px
        ${dropdown.option.border.radius.bottomLeft}px;
  `}
`;

const Option = styled.li`
  ${({
    isSelected,
    highlighted,
    theme: {
      yoga: {
        baseFont,
        components: { dropdown },
      },
    },
  }) => `
    display: flex;
    align-items: center;
    height: ${dropdown.option.height}px;
    padding:
      ${dropdown.option.padding.top}px
      ${dropdown.option.padding.right}px
      ${dropdown.option.padding.bottom}px
      ${dropdown.option.padding.left}px;
    cursor: pointer;

    font-family: ${baseFont.family};
    font-size: ${dropdown.option.font.size}px;
    line-height: ${dropdown.option.font.lineHeight}px;

    font-weight: ${
      isSelected
        ? `${dropdown.selected.option.font.weight}`
        : `${dropdown.option.font.weight}`
    };

    color: ${
      isSelected
        ? `${dropdown.selected.option.font.color}`
        : `${dropdown.option.font.color}`
    };

    ${
      highlighted
        ? `background-color: ${dropdown.hover.option.backgroundColor};`
        : ''
    }

    &:hover {
      background-color: ${dropdown.hover.option.backgroundColor};
    }

    &:last-child {
      border-radius:
        ${dropdown.option.border.radius.topLeft}px
        ${dropdown.option.border.radius.topRight}px
        ${dropdown.option.border.radius.bottomRight}px
        ${dropdown.option.border.radius.bottomLeft}px;
    }
  `}
`;

const ArrowIcon = styled(({ isOpen, selected, ...props }) => (
  <ChevronDown width={20} height={20} {...props} />
))`
  ${({
    isOpen,
    selected,
    theme: {
      yoga: {
        components: { dropdown },
      },
    },
  }) => `
    fill: ${dropdown.disabled.arrow.fill};
    ${selected ? `fill: ${dropdown.selected.arrow.fill};` : ''};
    transform: rotate(${isOpen ? '180deg' : '0'});
  `}
`;

const getSelectedOption = options =>
  options.find(item => item.selected === true);

/** Gympass Dropdown is a multiple choice type of menu. */
const Dropdown = ({ label, disabled, full, options, onChange, ...rest }) => (
  <Downshift
    initialSelectedItem={getSelectedOption(options)}
    selectedItemChanged={(prevItem, item) => prevItem !== item}
    itemToString={item => (item ? item.label : '')}
    onChange={onChange}
  >
    {({
      getInputProps,
      getItemProps,
      getRootProps,
      getMenuProps,
      getToggleButtonProps,
      selectedItem,
      highlightedIndex,
      isOpen,
    }) => (
      <Wrapper full={full} {...getRootProps()} {...rest}>
        <Selector
          isOpen={isOpen}
          disabled={disabled}
          selected={selectedItem !== null}
        >
          <Input
            readOnly
            placeholder={label}
            disabled={disabled}
            selected={selectedItem !== null}
            {...getInputProps()}
          />
          <Button
            isOpen={isOpen}
            disabled={disabled}
            {...getToggleButtonProps()}
          >
            <ArrowIcon isOpen={isOpen} selected={selectedItem !== null} />
          </Button>
        </Selector>

        {isOpen && (
          <OptionsList selected={selectedItem !== null} {...getMenuProps()}>
            {options.map((item, index) => (
              <Option
                {...getItemProps({
                  key: item.value,
                  item,
                  isSelected: selectedItem === item,
                  highlighted: highlightedIndex === index,
                })}
              >
                {item.label}
              </Option>
            ))}
          </OptionsList>
        )}
      </Wrapper>
    )}
  </Downshift>
);

Dropdown.propTypes = {
  label: string,
  disabled: bool,
  full: bool,
  /** { label (string), value (string or number), selected: (boolean) } */
  options: arrayOf(
    shape({
      label: string,
      value: oneOfType([string, number]),
      selected: bool,
    }),
  ).isRequired,
  onChange: func,
};

Dropdown.defaultProps = {
  label: '',
  full: false,
  disabled: false,
  onChange: () => {},
};

export default Dropdown;
