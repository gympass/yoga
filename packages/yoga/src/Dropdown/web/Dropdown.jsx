import React, { useCallback, useEffect, useState } from 'react';
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

import Input from '../../Input/web/Input';

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
  `}
`;

const Selector = styled.div`
  ${({
    isOpen,
    disabled,
    selected,
    error,
    theme: {
      yoga: {
        colors,
        components: { dropdown },
      },
    },
  }) => css`
    ${!disabled
      ? `
          fieldset {
            ${
              isOpen || selected
                ? `border-color: ${dropdown.hover.selector.border.color};`
                : ''
            }

            ${
              error && !isOpen
                ? `border-color: ${colors.feedback.attention[1]};
                `
                : ''
            }
          }
          &:hover {
            fieldset {
              border-color: ${
                error && !isOpen
                  ? dropdown.hover.selector.border.error
                  : dropdown.hover.selector.border.color
              };
            }
          }
        `
      : ''}
  `}
`;

const Field = styled(Input)`
  pointer-events: none;

  ${({ value, isOpen, disabled }) => css`
    ${isOpen && !disabled
      ? css`
          & ~ legend {
            max-width: max-content;
          }

          & ~ label {
            ${labelTransition};
          }
        `
      : ''}

    ${value && !disabled
      ? css`
          & ~ label {
            ${labelTransition};
          }
        `
      : ''}
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
    padding-right: ${dropdown.button.padding.right}px;
    padding-top: ${dropdown.button.padding.top}px;
    padding-bottom: ${dropdown.button.padding.bottom}px;

    border: none;
    outline: none;
    background-color: transparent;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
  `}
`;

const OptionsList = styled.ul`
  ${({
    isMaxHeight,
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

    ${isMaxHeight && `max-height: ${dropdown.option.height * 3.5}px;`}
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
    disabled,
    theme: {
      yoga: {
        components: { dropdown },
      },
    },
  }) => `
    fill: ${dropdown.arrow.fill};
    ${disabled ? `fill: ${dropdown.disabled.arrow.fill};` : ''};
    ${selected && !disabled ? `fill: ${dropdown.selected.arrow.fill};` : ''};
    transform: rotate(${isOpen ? '180deg' : '0'});
  `}
`;

/** Gympass Dropdown is a multiple choice type of menu. */
const Dropdown = React.forwardRef(
  (
    {
      error,
      label = '',
      disabled = false,
      full = false,
      options,
      onChange = () => {},
      isMaxHeight = true,
      ...rest
    },
    ref,
  ) => {
    const inputRef = ref || React.useRef(null);
    const selectedOption = options.find(item => item.selected === true);
    const [localSelectedItem, setLocalSelectedItem] = useState(selectedOption);

    useEffect(() => {
      setLocalSelectedItem(selectedOption);
    }, [options]);

    const onLocalChange = useCallback(
      opt => {
        setLocalSelectedItem(opt);
        onChange(opt);
      },
      [onChange],
    );

    return (
      <Downshift
        initialSelectedItem={selectedOption}
        selectedItemChanged={(prevItem, item) => prevItem !== item}
        itemToString={item => (item ? item.label : '')}
        onChange={onLocalChange}
        selectedItem={localSelectedItem}
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
              error={error}
              selected={selectedItem !== null}
            >
              <Field
                readOnly
                disabled={disabled}
                selected={selectedItem !== null}
                isOpen={isOpen}
                label={label}
                full={full}
                ref={inputRef}
                includeAriaAttributes={false}
                {...getInputProps()}
              />
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
              <OptionsList
                isMaxHeight={isMaxHeight}
                selected={selectedItem !== null}
                {...getMenuProps()}
              >
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
  },
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
  isMaxHeight: bool,
};

export default Dropdown;
