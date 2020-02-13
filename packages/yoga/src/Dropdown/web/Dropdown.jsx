import React from 'react';
import styled from 'styled-components';
import Downshift from 'downshift';
import { arrayOf, number, func, shape, string } from 'prop-types';

import { ArrowDown } from '@gympass/yoga-icons';

const Wrapper = styled.div`
  ${({
    isOpen,
    theme: {
      yoga: {
        colors: { primary },
      },
    },
  }) => `
    position: relative;

    backgorund: #fff;
    border: 1px solid #9898a6;
    border-radius: 8px;
  `}
`;

const Selector = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 14px 0 14px 16px;
`;

const Input = styled.input`
  width: 282px;

  background-color: transparent;
  border: none;

  font-family: Open Sans;
  font-size: 14px;
  line-height: 20px;
  color: #9898a6;
`;

const Button = styled.button`
  display: flex;
  align-content: center;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  padding-right: 14px;

  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
`;

const OptionsList = styled.ul`
  width: 100%;
  height: 140px;
  margin: 0;
  padding: 0;
  overflow-x: scroll;
  flex-direction: column;

  list-style-type: none;
`;

const Option = styled.li`
  ${({
    isSelected,
    theme: {
      yoga: {
        colors: { primary },
      },
    },
  }) => `
    display: flex;
    height: 40px;
    padding: 0 16px;
    align-items: center;
    
    font-family: Open Sans;
    font-size: 14px;
    font-weight: ${isSelected ? 'bold' : 'normal'}; 
    line-height: 20px;
    color: ${isSelected ? '#41414A' : '#6B6B78'};

    &:hover {
      background-color: ${isSelected ? '#E6E6F0' : '#F5F5FA'};  
    }

    cursor: pointer;
    transition: 200ms all ease-out;  

    &:last-child {
      border-radius: 0 0 8px 8px;
    }
  `}
`;

const Dropdown = ({ label, options, selectedOption, onChange }) => (
  <>
    <Downshift
      initialSelectedItem={selectedOption}
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
        selectedItem,
      }) => (
        <Wrapper isOpen={isOpen} {...getRootProps()}>
          <Selector>
            <Input
              readOnly
              placeholder={selectedOption.label || label}
              {...getInputProps()}
            />
            <Button {...getToggleButtonProps()}>
              <ArrowDown />
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

const optionProp = shape({
  label: string,
  value: string,
});

Dropdown.propTypes = {
  label: string,
  options: arrayOf(optionProp).isRequired,
  selectedOption: optionProp.isRequired,
  onChange: func,
};

Dropdown.defaultProps = {
  label: '',
  onChange: () => {},
};

export default Dropdown;
