/* eslint react/no-array-index-key: 0 */
import React, { useState } from 'react';
import Downshift from 'downshift';
import { arrayOf, string, func, bool, shape } from 'prop-types';
import styled from 'styled-components';

import Input from '../../Input/web/Input';

const escapeRegExp = str => str.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');

const StyledInput = styled(Input)`
  z-index: 1;

  ${({
    isOpen,
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) =>
    isOpen
      ? `
        border-color: ${input.border.color.typed};
        border-bottom-width: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;

        fieldset {
          border-color: ${input.border.color.typed};
          border-bottom-width: 0;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }

        & label {
          color: ${input.label.color.focus};
          font-weight: ${input.label.font.weight.typed};
        }

        & legend {
          font-weight: ${input.label.font.weight.typed};
        }
      `
      : ''}
`;

const Wrapper = styled.div`
  position: relative;

  ${({ full }) => `width: ${full ? '100%' : 'auto'}`}
`;

const List = styled.ul`
  position: absolute;
  margin: 0;

  padding: 0;

  z-index: 999;

  ${({
    full,
    theme: {
      yoga: {
        components: { autoComplete },
      },
    },
  }) => `
    top: ${autoComplete.height}px;

    width: ${full ? '100%' : `${autoComplete.width}px`};
    max-height: ${autoComplete.height * 6}px;

    background-color: ${autoComplete.field.backgroundColor};
    border:
      ${autoComplete.border.width}px solid ${autoComplete.border.color.typed};
    border-top-width: 0;
    border-bottom-left-radius: ${autoComplete.border.radius}px;
    border-bottom-right-radius: ${autoComplete.border.radius}px;

    overflow: hidden;
  `}
`;

const Item = styled.li`
  list-style: none;

  cursor: pointer;

  ${({
    selected,
    theme: {
      yoga: {
        components: { autoComplete },
      },
    },
  }) => `
    padding:
      ${autoComplete.list.padding.top}px
      ${autoComplete.list.padding.right}px
      ${autoComplete.list.padding.bottom}px
      ${autoComplete.list.padding.left}px;

    background-color: ${autoComplete.list.backgroundColor.default};
    outline: none;

    font-size: ${autoComplete.list.font.size}px;
    font-weight: ${autoComplete.list.font.weight.default};
    line-height: ${autoComplete.list.font.lineHeight}px;

    &:hover {
      background-color: ${autoComplete.list.backgroundColor.hover};
    }

    ${
      selected
        ? `background-color: ${autoComplete.list.backgroundColor.hover};`
        : ''
    }
  `}
`;

const Match = styled.mark`
  background: transparent;
  color: inherit;

  ${({
    theme: {
      yoga: {
        components: { autoComplete },
      },
    },
  }) => `
    font-weight: ${autoComplete.list.font.weight.matched};
  `}
`;

/** The autocomplete is a normal input field enhanced by a panel of suggested options. */
const AutoComplete = ({
  className,
  style,
  full,
  options,
  onChange,
  onClean,
  onSelect,
  value,
  ...props
}) => {
  const [userValue, setUserValue] = useState(value);

  return (
    <Downshift
      selectedItem={userValue}
      onStateChange={changes => {
        if (Object.prototype.hasOwnProperty.call(changes, 'selectedItem')) {
          setUserValue(changes.selectedItem);
          onSelect(changes.selectedItem);
        } else if (
          Object.prototype.hasOwnProperty.call(changes, 'inputValue')
        ) {
          setUserValue(changes.inputValue);
          onChange(changes.inputValue);
        }
      }}
    >
      {({
        getInputProps,
        getItemProps,
        clearSelection,
        getMenuProps,
        getRootProps,
        highlightedIndex,
        isOpen,
        openMenu,
        inputValue,
      }) => {
        const reg = new RegExp(
          `(${escapeRegExp(inputValue || '').trim() || null})`,
          'gi',
        );

        const suggestionList = options
          .filter(option => option.match(reg))
          .sort((first, second) =>
            first.toLowerCase().indexOf(inputValue) <
            second.toLowerCase().indexOf(inputValue)
              ? -1
              : 1,
          )
          .slice(0, 6);

        const hasSuggestion = isOpen && Boolean(suggestionList.length);

        return (
          <Wrapper
            className={className}
            style={style}
            full={full}
            {...getRootProps()}
          >
            <StyledInput
              {...props}
              full={full}
              isOpen={hasSuggestion}
              onClean={cleanable => {
                onClean(cleanable);
                clearSelection();
              }}
              {...getInputProps({
                onFocus: () => (inputValue.length ? openMenu() : null),
              })}
            />
            {hasSuggestion && (
              <List {...getMenuProps()} full={full}>
                {suggestionList.map((option, optionIndex) => (
                  <Item
                    {...getItemProps({
                      key: `${option}${optionIndex}`,
                      index: optionIndex,
                      item: option,
                      selected: highlightedIndex === optionIndex,
                    })}
                  >
                    {option
                      .split(reg)
                      .map((part, index) =>
                        part.match(reg) ? (
                          <Match key={`${index}`}>{part}</Match>
                        ) : (
                          <React.Fragment key={`unmatch-${index}`}>
                            {part}
                          </React.Fragment>
                        ),
                      )}
                  </Item>
                ))}
              </List>
            )}
          </Wrapper>
        );
      }}
    </Downshift>
  );
};

AutoComplete.propTypes = {
  className: string,
  full: bool,
  options: arrayOf(string),
  style: shape({}),
  onSelect: func,
  onChange: func,
  onClean: func,
  value: string,
};

AutoComplete.defaultProps = {
  className: undefined,
  full: false,
  options: [],
  style: undefined,
  onSelect: () => {},
  onChange: () => {},
  onClean: () => {},
  value: undefined,
};

export default AutoComplete;
