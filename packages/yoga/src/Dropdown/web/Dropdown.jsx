import React from 'react';
import styled, { css } from 'styled-components';
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

import Helper from '../../Input/web/Helper';

import Legend from '../../Input/web/Legend';
import Label from '../../Input/web/Label';

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

const Selector = styled.fieldset`
  ${({
    disabled,
    selected,
    isOpen,
    error,
    theme: {
      yoga: {
        colors,
        components: { dropdown, input },
      },
    },
  }) => `
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    margin: 0;

    height: ${input.height}px;
    width: 100%;
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
        ? `border-color: ${dropdown.hover.selector.border.color};
           border-radius: ${dropdown.selector.border.radius}px ${dropdown.selector.border.radius}px 0px 0px;
        `
        : ''
    }
  `}
`;
const labelTransition = css`
  ${({
    theme: {
      yoga: {
        transition,
        components: { input, dropdown },
      },
    },
  }) => `
    transform: translateY(-${input.height / 2 - 2}px);
    transition-property: transform, font-size, color;
    transition-duration: ${transition.duration[1]}ms;
    transition-timing-function: cubic-bezier(${transition.timing[0].join()});

    font-size: ${input.label.font.size.typed}px;
    color: ${dropdown.input.label.color};
<<<<<<< HEAD
<<<<<<< HEAD
    margin-left: ${dropdown.input.label.margin.left}px;
=======
    margin-left: ${dropdown.input.label.margin.left}
>>>>>>> 251d7d7cf... :sparkles: fix: change dropdown configs
=======
    margin-left: ${dropdown.input.label.margin.left}px;
>>>>>>> 23df53c1c... :art: feat: add legend behavior to another scenery
  `}
`;

const Input = styled.input`
  ${({
    disabled,
    value,
<<<<<<< HEAD
<<<<<<< HEAD
    isOpen,
=======
>>>>>>> 251d7d7cf... :sparkles: fix: change dropdown configs
=======
    isOpen,
>>>>>>> 23df53c1c... :art: feat: add legend behavior to another scenery
    theme: {
      yoga: {
        transition,
        baseFont,
        components: { dropdown },
      },
    },
  }) => css`
    width: 100%;
    padding: 0;

    background-color: transparent;
    border: none;
    font-family: ${baseFont.family};
    font-size: ${dropdown.input.font.size}px;
    line-height: ${dropdown.input.font.lineHeight}px;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};

    &:focus {
      & ~ legend {
        max-width: 1000px;
        transition-property: max-width;
        transition-duration: ${transition.duration[1]}ms;
      }

      & ~ label {
        ${labelTransition}
      }
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 23df53c1c... :art: feat: add legend behavior to another scenery
    ${value || isOpen
      ? css`
          & ~ legend {
            max-width: 1000px;
          }

          & ~ label {
            ${labelTransition};
          }
        `
      : ''}

    ${isOpen &&
<<<<<<< HEAD
=======
    ${value &&
>>>>>>> 251d7d7cf... :sparkles: fix: change dropdown configs
=======
>>>>>>> 23df53c1c... :art: feat: add legend behavior to another scenery
      css`
        & ~ legend {
          max-width: 1000px;
        }

        & ~ label {
          ${labelTransition};
        }
      `}
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
    font-size: ${
      isSelected
        ? dropdown.selected.option.font.size
        : dropdown.option.font.size
    }px;
    line-height: ${dropdown.option.font.lineHeight}px;

    font-weight: ${
      isSelected
        ? `${dropdown.selected.option.font.weight}`
        : `${dropdown.option.font.weight}`
    };

    color: ${
      isSelected
        ? dropdown.selected.option.font.color
        : dropdown.option.font.color
    };

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
    disabled,
    theme: {
      yoga: {
        components: { dropdown },
      },
    },
  }) => `
    fill: ${dropdown.arrow.fill};
    ${disabled ? `fill: ${dropdown.disabled.arrow.fill};` : ''};
    ${selected ? `fill: ${dropdown.selected.arrow.fill};` : ''};
    transform: rotate(${isOpen ? '180deg' : '0'});
  `}
`;

const getSelectedOption = options =>
  options.find(item => item.selected === true);

/** Gympass Dropdown is a multiple choice type of menu. */
const Dropdown = ({
  error,
  label,
  disabled,
  full,
  options,
  onChange,
  ...rest
}) => (
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
      selectItem,
      selectedItem,
      highlightedIndex,
      isOpen,
    }) => (
      <Wrapper full={full} {...getRootProps()} {...rest}>
        <Selector
          isOpen={isOpen}
          disabled={disabled}
          error={error}
          selected={selectedItem !== null}
        >
          <Input
            readOnly
            disabled={disabled}
            selected={selectedItem !== null}
            {...getInputProps()}
            isOpen={isOpen}
          />
<<<<<<< HEAD
          <Label error={error} disabled={disabled} data-testid="label">
=======
          <Label error={error} disabled={disabled}>
>>>>>>> 251d7d7cf... :sparkles: fix: change dropdown configs
            {label}
          </Label>

          {label && <Legend>{label}</Legend>}
          <Button
            isOpen={isOpen}
            disabled={disabled}
            {...getToggleButtonProps()}
          >
            <ArrowIcon
              isOpen={isOpen}
              selected={selectedItem !== null}
              disabled={disabled}
            />
          </Button>
        </Selector>
        {isOpen && (
          <OptionsList selected={selectedItem !== null} {...getMenuProps()}>
            <Option onClick={() => selectItem(null)} />
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
        {error && <Helper error={error} />}
      </Wrapper>
    )}
  </Downshift>
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
  onChange: func,
};

Dropdown.defaultProps = {
  label: '',
  error: undefined,
  full: false,
  disabled: false,
  onChange: () => {},
};

export default Dropdown;
