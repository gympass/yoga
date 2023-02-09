import React, { useRef, useState } from 'react';
import PropTypes, { bool } from 'prop-types';
import { theme, Box, Icon, Text } from '@gympass/yoga';
import styled, { css } from 'styled-components';
import { Check, ChevronUp, ChevronDown, Close } from '@gympass/yoga-icons';
import { useOnClickOutside } from '../../hooks';

const Wrapper = styled.div`
  ${({
    full,
    theme: {
      yoga: {
        components: { dropdowninput },
      },
    },
  }) => `
    position: relative;
    width: ${full ? '100%' : `${dropdowninput.width}px`};
  `}
`;

const Container = styled.div`
  ${({
    showDropDown,
    theme: {
      yoga: {
        components: { dropdowninput },
      },
    },
  }) => `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: ${dropdowninput.container.border.radius}px;
  background: ${dropdowninput.container.background};
  border: ${dropdowninput.container.border.width}px solid ${
    dropdowninput.container.border.color
  };
  box-sizing: border-box;
  background: ${dropdowninput.container.background};
  height: ${dropdowninput.container.height}px;
  margin: ${dropdowninput.container.margin.top}px 0 0;
  transition: all 0.1s ease-in-out;

  ${
    showDropDown &&
    css`
      border-top: 1px solid ${dropdowninput.container.border.color};
      border-left: 1px solid ${dropdowninput.container.border.color};
      border-right: 1px solid ${dropdowninput.container.border.color};
      border-radius: 8px 8px 0 0;
      border-bottom: 0;
    `
  }
  `}
`;

const Clear = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  outline: none;
  padding: ${theme.spacing.medium}px;
`;

const Input = styled.input`
  background: none;
  border: none;
  color: ${theme.colors.text.primary};
  flex: 1;
  font-family: ${({ theme: { yoga } }) => yoga.baseFont.family};
  font-size: ${theme.fontSizes.small}px;
  font-weight: ${theme.fontWeights.regular};
  height: 100%;
  letter-spacing: 0;
  line-height: ${theme.lineHeights.small}px;
  outline: none;
  text-align: left;
  padding-left: ${theme.spacing.small}px;

  &::placeholder {
    color: ${theme.colors.text.secondary};
  }

  ${({ value }) =>
    value &&
    css`
      + ${Clear} {
        display: block;
      }
    `}
`;

const Divisor = styled.div`
  width: 1px;
  height: 28px;
  background: ${theme.colors.elements.lineAndBorders};
`;

const ContainerDropDown = styled.ul`
  ${({
    width,
    position,
    theme: {
      yoga: {
        components: { dropdowninput },
      },
    },
  }) => `
    margin: ${dropdowninput.containerDropDown.margin};
    height: ${dropdowninput.containerDropDown.height}px;
    width: ${width}px;
    overflow-y: scroll;
    border-left: ${dropdowninput.containerDropDown.border.width}px solid ${dropdowninput.containerDropDown.border.color};
    border-right: ${dropdowninput.containerDropDown.border.width}px solid ${dropdowninput.containerDropDown.border.color};
    border-bottom: ${dropdowninput.containerDropDown.border.width}px solid ${dropdowninput.containerDropDown.border.color};
    list-style: none;
    padding: 0 ${dropdowninput.containerDropDown.padding.right}px 0 ${dropdowninput.containerDropDown.padding.left}px;
    transition: all 0.1s ease-in-out;
    border-radius: 0px 0px ${dropdowninput.containerDropDown.border.radius}px ${dropdowninput.containerDropDown.border.radius}px;
    background: ${dropdowninput.containerDropDown.background};
    position: absolute;
    top: ${position}px;
    z-index: 9999;
  `}
`;

const ButtonDropDown = styled.button`
  display: flex;
  align-items: center;
  width: auto;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  height: 100%;
`;

const ItemDropDown = styled.li`
  ${({
    theme: {
      yoga: {
        components: { dropdowninput },
      },
    },
  }) => `
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  height: ${dropdowninput.itemDropDown.height}px;
  cursor: pointer;
  font-size: ${dropdowninput.itemDropDown.fontSize}px;
  font-weight: ${dropdowninput.itemDropDown.fontWeight};

  div {
    display: flex;
    align-items: center;
  }
  `}
`;

const DropdownInput = ({
  full,
  placeholder,
  onClear,
  value,
  selectedCountry,
  onChangeSelectedCountry,
  countries,
  ...other
}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const inputRef = useRef(null);
  const dropDownRef = useRef(null);
  const containerRef = useRef(null);

  const toggleShowDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  useOnClickOutside(dropDownRef, e => {
    if (e.target.id !== 'button-drop-down') {
      toggleShowDropDown();
    }
  });

  const changeSelectedCountry = selected => () => {
    onChangeSelectedCountry(selected);
    toggleShowDropDown();
    inputRef.current.focus();
  };

  return (
    <Wrapper full={full}>
      <Container
        d="flex"
        alignItems="center"
        justifyContent="flex-start"
        ref={containerRef}
        showDropDown={showDropDown}
      >
        <ButtonDropDown
          id="button-drop-down"
          type="button"
          onClick={toggleShowDropDown}
        >
          <Box>
            <Icon
              marginRight={2}
              marginLeft={4}
              as={selectedCountry.icon}
              width="medium"
              height="medium"
            />
          </Box>
          <Icon
            as={showDropDown ? ChevronUp : ChevronDown}
            size="small"
            cursor="pointer"
            mr="xsmall"
            stroke="deep"
          />
          <Divisor />
        </ButtonDropDown>

        <Input
          data-testid="input"
          ref={inputRef}
          value={value}
          placeholder={placeholder}
          {...other}
        />

        <Clear onClick={onClear} type="button">
          <Icon as={Close} size="small" fill="medium" />
        </Clear>
      </Container>

      {showDropDown && (
        <ContainerDropDown
          ref={dropDownRef}
          position={containerRef.current.offsetTop + 50}
          width={containerRef.current.offsetWidth}
          data-testid="dropdown"
        >
          {countries.map(country => {
            const isCountrySelected = selectedCountry.id === country.id;

            return (
              <ItemDropDown
                key={country.id}
                onClick={changeSelectedCountry(country)}
              >
                <div>
                  <Box>
                    <Icon
                      as={country.icon}
                      width="medium"
                      height="medium"
                      marginRight={4}
                    />
                  </Box>
                  <Text.Small
                    fw={isCountrySelected ? 'medium' : 'regular'}
                    color={isCountrySelected ? 'primary' : 'secondary'}
                  >
                    {country.name}
                  </Text.Small>
                </div>
                {isCountrySelected && (
                  <Icon
                    as={Check}
                    width="medium"
                    height="medium"
                    fill="vibin"
                  />
                )}
              </ItemDropDown>
            );
          })}
        </ContainerDropDown>
      )}
    </Wrapper>
  );
};

DropdownInput.propTypes = {
  full: bool,
  placeholder: PropTypes.string.isRequired,
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
    }),
  ).isRequired,
  onClear: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  selectedCountry: PropTypes.string.isRequired,
  onChangeSelectedCountry: PropTypes.func.isRequired,
};

DropdownInput.defaultProps = {
  full: false,
};

export default DropdownInput;
