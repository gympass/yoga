import React from 'react';
import styled from 'styled-components';
import Downshift from 'downshift';
import { arrayOf, func, shape, string, bool } from 'prop-types';

import { Arrow } from '@gympass/yoga-icons';

const Wrapper = styled.div`
  ${({
    theme: {
      yoga: {
        components: { dropdown },
      },
    },
  }) => `
    position: relative;
    display: block;

    width: ${dropdown.width}px;
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
    ${
      isOpen && !disabled
        ? `border-color: ${dropdown.hover.selector.border.color}`
        : ''
    }
    &:hover{
      ${
        !disabled ? `border-color: ${dropdown.hover.selector.border.color}` : ''
      };
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
    justify-content: flex-end;
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    padding-right: ${dropdown.button.paddingRight}px;

    border: none;
    outline: none;
    background-color: transparent;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
  `}
`;

const ArrowIcon = styled(Arrow)`
  ${({
    isOpen,
    disabled,
    selected,
    theme: {
      yoga: {
        colors: { primary },
        components: { dropdown },
      },
    },
  }) => `
    fill: ${dropdown.disabled.arrow.fill};
    ${disabled ? `fill: ${dropdown.disabled.arrow.fill};` : ''};
    ${selected ? `fill: ${primary[3]};` : ''};
    transform: rotate(${isOpen ? '180deg' : '0'});
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

    width: 100%;
    max-height: 140px;
    margin: 0;
    padding: 0;
    overflow-x: scroll;
    list-style-type: none;

    background: ${dropdown.optionsList.backgroundColor};
    border: 1px solid ${dropdown.optionsList.border.color};
    border-top: none;

    ${
      selected
        ? `border-color: ${dropdown.selected.optionsList.border.color};`
        : ''
    };

    border-radius: 
      ${dropdown.optionsList.border.radius.top}px 
      ${dropdown.optionsList.border.radius.right}px 
      ${dropdown.optionsList.border.radius.bottom}px 
      ${dropdown.optionsList.border.radius.left}px
  `}
`;

const Option = styled.li`
  ${({
    isSelected,
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

    &:hover {
      background-color: ${dropdown.hover.option.backgroundColor}; 
    }

    &:last-child {
      border-radius: 
        ${dropdown.option.border.radius.top}px 
        ${dropdown.option.border.radius.right}px 
        ${dropdown.option.border.radius.bottom}px 
        ${dropdown.option.border.radius.left}px
    }
  `}
`;

const getSelectedOption = options => {
  const filteredOptions = options.filter(item => item.selected === true);
  return filteredOptions.length > 0 ? filteredOptions[0] : null;
};

const Dropdown = ({ label, disabled, options, onChange, ...rest }) => (
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
      isOpen,
    }) => (
      <Wrapper {...getRootProps()} {...rest}>
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
            <ArrowIcon
              isOpen={isOpen}
              disabled={disabled}
              selected={selectedItem !== null}
            />
          </Button>
        </Selector>

        {isOpen && (
          <OptionsList selected={selectedItem !== null} {...getMenuProps()}>
            {options.map(item => (
              <Option
                {...getItemProps({
                  key: item.value,
                  item,
                  isSelected: selectedItem === item,
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
  options: arrayOf(
    shape({
      label: string,
      value: string,
    }),
  ).isRequired,
  onChange: func,
};

Dropdown.defaultProps = {
  label: '',
  disabled: false,
  onChange: () => {},
};

export default Dropdown;
