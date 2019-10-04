import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Arrow from '../../images/arrow-dropdown.svg';

const Wrapper = styled.div`
  position: relative;
  max-width: 160px;
`;

const Selector = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px 8px 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: 200ms all ease-out;
`;

const ArrowDropdown = styled(Arrow)`
  width: 10px;
  transition: 200ms all ease-out;
  ${({ isOpen }) => isOpen && `transform: rotate(180deg);`}
`;

const Label = styled.span`
  font-size: 12px;
  padding-right: 5px;
  color: #555;
`;

const OptionsList = styled.ul`
  display: block;
  flex-direction: column;
  position: absolute;

  width: 100%;
  overflow: hidden;
  z-index: 1;
  top: 40px;
  padding: 0;

  list-style-type: none;
  background-color: white;
  border-radius: 8px;
  box-shadow: 1px 1px 16px rgba(0, 0, 0, 0.2);
`;

const Option = styled.li`
  display: flex;
  padding: 0 16px;
  height: 40px;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  transition: 200ms all ease-out;
  &:hover {
    background-color: #caefea;
  }
  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: #CAEFEA;
    font-weight: bold;
  `}
`;

const Dropdown = ({ label, value, options, onSelect }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOptions = () => setOpen(!isOpen);

  const onSelectOption = option => {
    onSelect(option);
    toggleOptions();
  };

  return (
    <Wrapper>
      <Selector onClick={() => toggleOptions()}>
        <Label>{label}</Label>
        <Label>{value}</Label>
        <ArrowDropdown isOpen={isOpen} />
      </Selector>
      {isOpen && (
        <OptionsList>
          {options &&
            options.map(option => (
              <Option key={option} onClick={() => onSelectOption(option)}>
                {option}
              </Option>
            ))}
        </OptionsList>
      )}
    </Wrapper>
  );
};

Dropdown.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  onSelect: PropTypes.func,
};

Dropdown.defaultProps = {
  value: '',
  options: [],
  onSelect: () => {},
};

export default Dropdown;
