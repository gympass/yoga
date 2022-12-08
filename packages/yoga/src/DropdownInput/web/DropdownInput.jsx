import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { theme, Box, Icon } from '@gympass/yoga';
import styled, { css } from 'styled-components';
import {
  FlagsIcons,
  Check,
  ChevronUp,
  ChevronDown,
  Close,
} from '@gympass/yoga-icons';
import { useOnClickOutside } from '../../hooks';

const Wrapper = styled.div`
  position: relative;
`;

const Container = styled.div`
  display: flex;
  border-radius: ${theme.radii.small}px;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  border: ${theme.borders.small}px solid #ccc;
  box-sizing: border-box;
  background: #fff;
  height: 52px;
  margin: ${theme.spacing.xxsmall}px 0 0;
  transition: all 0.1s ease-in-out;
  width: 320px;
  ${({ showDropDown }) =>
    showDropDown &&
    css`
      border-top: ${theme.borders.small}px solid #ccc;
      border-left: ${theme.borders.small}px solid #ccc;
      border-right: ${theme.borders.small}px solid #ccc;
      border-radius: ${theme.radii.small}px ${theme.radii.small}px 0px 0px;
      border-bottom: 0;
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
  font-style: normal;
  font-weight: ${theme.fontWeights.regular};
  height: 100%;
  letter-spacing: 0px;
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
  margin: 0;
  height: 272px;
  width: ${props => `${props.width}px`};
  overflow-y: scroll;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  list-style: none;
  padding: 0 16px 0 16px;
  transition: all 0.1s ease-in-out;
  box-shadow: 0px 4px 12px rgba(152, 152, 167, 0.25);
  border-radius: 0px 0px ${theme.radii.small}px ${theme.radii.small}px;
  background: #fff;
  position: absolute;
  top: ${props => `${props.position}px`};
  z-index: 9999;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  height: 72px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1px solid ${theme.colors.elements.lineAndBorders};

  div {
    display: flex;
    align-items: center;
  }

  &:last-child {
    border: none;
  }
`;

const NameCountry = styled.div`
  color: ${props =>
    props.selectedCountry ? theme.colors.vibin : theme.colors.stamina};
`;

function DropdownInput({
  placeholder,
  onClear,
  value,
  selectedCountry,
  onChangeSelectedCountry,
  countries,
  ...other
}) {
  const [showDropDown, setShowDropDown] = useState(false);
  const inputRef = useRef(null);
  const DropDownRef = useRef(null);
  const containerRef = useRef(null);

  const CountryFlag = {
    AR: FlagsIcons.FlagArgentina,
    BR: FlagsIcons.FlagBrazil,
    CL: FlagsIcons.FlagChile,
    DE: FlagsIcons.FlagGermany,
    IR: FlagsIcons.FlagIreland,
    IT: FlagsIcons.FlagItaly,
    MX: FlagsIcons.FlagMexico,
    ES: FlagsIcons.FlagSpain,
    UK: FlagsIcons.FlagUK,
    US: FlagsIcons.FlagUS,
    PT: FlagsIcons.FlagPortugal,
    UY: FlagsIcons.FlagUruguay,
    NL: FlagsIcons.FlagNetherlands,
    IE: FlagsIcons.FlagIreland,
  }[selectedCountry.id];

  function toggleShowDropDown() {
    setShowDropDown(!showDropDown);
  }

  useOnClickOutside(DropDownRef, e => {
    if (e.target.id !== 'button-drop-down') {
      toggleShowDropDown();
    }
  });

  function changeSelectedCountry(selected) {
    onChangeSelectedCountry(selected);
    toggleShowDropDown();
    inputRef.current.focus();
  }

  function renderListCountries() {
    return countries.map(country => (
      <ItemDropDown
        key={Math.round(1, 9999)}
        onClick={() => {
          changeSelectedCountry(country);
        }}
      >
        <NameCountry selectedCountry={selectedCountry.id === country.id}>
          <Box>
            <Icon
              as={country.icon}
              width="medium"
              height="medium"
              marginRight={4}
            />
          </Box>
          {country.name}
        </NameCountry>
        {selectedCountry.id === country.id && (
          <Icon as={Check} width="medium" height="medium" fill="vibin" />
        )}
      </ItemDropDown>
    ));
  }

  return (
    <Wrapper>
      <Container ref={containerRef} showDropDown={showDropDown}>
        <ButtonDropDown
          id="button-drop-down"
          type="button"
          onClick={() => {
            toggleShowDropDown();
          }}
        >
          <Box>
            <Icon
              marginRight={2}
              marginLeft={4}
              as={CountryFlag}
              width="medium"
              height="medium"
            />
          </Box>
          {!showDropDown && (
            <Icon
              as={ChevronDown}
              size="small"
              cursor="pointer"
              mr="xsmall"
              stroke="deep"
            />
          )}
          {showDropDown && (
            <Icon
              as={ChevronUp}
              size="small"
              cursor="pointer"
              mr="xsmall"
              stroke="deep"
            />
          )}
          <Divisor />
        </ButtonDropDown>

        <Input
          data-testid="input"
          ref={inputRef}
          value={value}
          {...other}
          placeholder={placeholder}
        />

        <Clear onClick={onClear} type="button">
          <Close fill="#d8385e" width={15} height={15} />
        </Clear>
      </Container>

      {showDropDown && (
        <ContainerDropDown
          ref={DropDownRef}
          position={containerRef.current.offsetTop + 50}
          width={containerRef.current.offsetWidth}
          data-testid="dropdown"
        >
          {renderListCountries()}
        </ContainerDropDown>
      )}
    </Wrapper>
  );
}

DropdownInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  countries: PropTypes.arrayOf.isRequired,
  onClear: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  selectedCountry: PropTypes.string.isRequired,
  onChangeSelectedCountry: PropTypes.func.isRequired,
};

export default DropdownInput;
