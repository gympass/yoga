import React from 'react';
import styled from 'styled-components';
import Downshift from 'downshift';
import { arrayOf, number, func, shape, string } from 'prop-types';
import { readableColor } from 'polished';

import Arrow from 'images/arrow-dropdown.svg';
import { hexToRgb } from '@gympass/yoga-common';

const Wrapper = styled.div`
  position: relative;
  font-size: 14px;
  ${({ width }) => (width ? `width: ${width}px` : '')};
  box-shadow: -1px 0 0 #f5f5fa;
`;

const Selector = styled.div`
  align-items: center;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  font-family: 'inter';
  font-size: 14px;
  padding: 8px 16px 8px;
  text-align: center;
  width: 80%;
`;

const Button = styled.button`
  align-content: center;
  background-color: transparent;
  cursor: pointer;
  border: none;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  left: 0;
  padding: 10px 16px 6px;
  position: absolute;
  top: 0;
  width: 100%;
  outline: none;
`;

const ArrowDropdown = styled(Arrow)`
  width: 10px;
  padding-bottom: 4px;
`;

const OptionsList = styled.ul`
  background-color: white;
  border-radius: 8px;
  box-shadow: 1px 1px 16px rgba(0, 0, 0, 0.2);
  display: block;
  flex-direction: column;
  list-style-type: none;
  overflow: hidden;
  padding: 0;
  position: absolute;
  top: 40px;
  width: 100%;
  z-index: 1;
`;

const Option = styled.li`
  ${({
    isSelected,
    theme: {
      yoga: {
        colors: { primary, text, white },
      },
    },
  }) => `
    align-items: center;
    background-color: ${isSelected ? primary : 'inherit'};
    color: ${
      isSelected ? readableColor(primary, text.secondary, white) : 'inherit'
    };
    cursor: pointer;
    display: flex;
    height: 40px;
    padding: 0 16px;
    transition: 200ms all ease-out;

    &:hover {
      background-color: ${hexToRgb(primary, 0.25)};
      color: ${readableColor(primary, text.secondary, white)};
    }
  `}
`;

const propShape = shape({
  value: string,
  label: string,
});

const Dropdown = ({
  width = undefined,
  options,
  onChange = () => {},
  selectedItem = propShape,
}) => (
  <Downshift
    selectedItem={selectedItem}
    onChange={onChange}
    itemToString={item => {
      return item ? item.label : '';
    }}
  >
    {({
      getInputProps,
      getItemProps,
      getRootProps,
      getMenuProps,
      getToggleButtonProps,
      isOpen,
      highlightedIndex,
    }) => (
      <Wrapper width={width} {...getRootProps()}>
        <Selector>
          <Input readOnly placeholder="Theme" {...getInputProps()} />
          <Button {...getToggleButtonProps()}>
            <ArrowDropdown />
          </Button>
        </Selector>

        {isOpen ? (
          <OptionsList {...getMenuProps()}>
            {options.map((item, index) => (
              <Option
                {...getItemProps({
                  key: item.value,
                  index,
                  item,
                  isActive: highlightedIndex === index,
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
);

Dropdown.propTypes = {
  width: number,
  options: arrayOf(propShape).isRequired,
  onChange: func,
  selectedItem: propShape,
};

export default Dropdown;
