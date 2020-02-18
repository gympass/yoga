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
    border: 1px solid ${
      disabled
        ? dropdown.disabled.selector.border.color
        : dropdown.selector.border.color
    };
  `}
`;

const Input = styled.input`
  ${({
    disabled,
    selectedItem,
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
      ${
        disabled
          ? `color: ${dropdown.disabled.input.font.color};`
          : `color: ${dropdown.input.font.color};`
      }
      ${
        selectedItem
          ? `color: ${dropdown.selected.input.font.color};`
          : `color: ${dropdown.input.font.color};`
      }
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
    theme: {
      yoga: {
        colors: { primary },
        components: { dropdown },
      },
    },
  }) => `
    fill: ${disabled ? dropdown.disabled.arrow.fill : primary[3]};
    transform: rotate(${isOpen ? '180deg' : '0'});
  `}
`;

const OptionsList = styled.ul`
  ${({
    theme: {
      yoga: {
        components: { dropdown },
      },
    },
  }) => `
    position: absolute;
    top: ${dropdown.optionsList.top}px;
    z-index: 1;

    width: 100%;
    max-height: 140px;
    margin: 0;
    padding: 0;
    overflow-x: scroll;
    list-style-type: none;

    background: ${dropdown.optionsList.backgroundColor};
    border-bottom: 1px solid ${dropdown.optionsList.border.color};
    border-left: 1px solid ${dropdown.optionsList.border.color};
    border-right: 1px solid ${dropdown.optionsList.border.color};
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
      background-color: ${
        isSelected
          ? `${dropdown.hover.option.backgroundColor.selected}`
          : `${dropdown.hover.option.backgroundColor.default}`
      }; 
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
  <>
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
        isOpen,
        selectedItem,
      }) => (
        <Wrapper {...getRootProps()} {...rest}>
          <Selector isOpen={isOpen} disabled={disabled}>
            <Input
              readOnly
              placeholder={label}
              selectedItem={selectedItem}
              disabled={disabled}
              {...getInputProps()}
            />
            <Button
              isOpen={isOpen}
              disabled={disabled}
              {...getToggleButtonProps()}
            >
              <ArrowIcon isOpen={isOpen} disabled={disabled} />
            </Button>
          </Selector>

          {isOpen ? (
            <OptionsList {...getMenuProps()}>
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
          ) : null}
        </Wrapper>
      )}
    </Downshift>
  </>
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
