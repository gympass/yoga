import React from 'react';
import styled from 'styled-components';
import Downshift from 'downshift';
import { arrayOf, number, func, shape, string } from 'prop-types';
import { readableColor } from 'polished';

import Arrow from '../../images/arrow-dropdown.svg';

const Wrapper = styled.div`
  position: relative;
  font-size: 14px;
  ${({ width }) => (width ? `width: ${width}px` : '')};
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
  font-family: 'Muli';
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
`;

const ArrowDropdown = styled(Arrow)`
  width: 10px;
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
      colors: {
        primary: primaryPallete,
        gray: { darkGray },
        white,
      },
    },
  }) => `
    align-items: center;
    background-color: ${isSelected ? primaryPallete[0] : 'inherit'};
    color: ${
      isSelected ? readableColor(primaryPallete[0], darkGray, white) : 'inherit'
    };
    cursor: pointer;
    display: flex;
    height: 40px;
    padding: 0 16px;
    transition: 200ms all ease-out;

    &:hover {
      background-color: ${primaryPallete[1]};
      color: ${readableColor(primaryPallete[1], darkGray, white)};
    }
  `}
`;

const Dropdown = ({ width, options, onChange, selectedItem }) => (
  <>
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
  </>
);

const propShape = shape({
  value: string,
  label: string,
});

Dropdown.propTypes = {
  width: number,
  options: arrayOf(propShape).isRequired,
  onChange: func,
  selectedItem: propShape,
};

Dropdown.defaultProps = {
  width: undefined,
  onChange: () => {},
  selectedItem: propShape,
};

export default Dropdown;
