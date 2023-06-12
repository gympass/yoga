/* eslint react/no-array-index-key: 0 */
import React, { useState, useCallback, useRef, useEffect } from 'react';
import Downshift from 'downshift';
import { arrayOf, string, func, bool, shape } from 'prop-types';
import styled, { css } from 'styled-components';
import { ChevronDown, ChevronUp } from '@gympass/yoga-icons';

import Input from '../../Input/web/Input';

const escapeRegExp = str => str.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');

const Wrapper = styled.div`
  position: relative;

  ${({ full }) => `width: ${full ? '100%' : 'auto'}`}

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

      ${Input} {
        border-color: ${input.border.color.typed};
        border-bottom-width: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }

      fieldset {
        border-color: ${input.border.color.typed};
        border-bottom-width: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }

      label {
        color: ${input.label.color.focus};
        font-weight: ${input.label.font.weight};
      }

      legend {
        font-weight: ${input.label.font.weight};
      }
      `
      : ''}
`;

const List = styled.ul`
  position: absolute;
  margin: 0;

  padding: 0;

  z-index: 999;

  ${({
    full,
    error,
    theme: {
      yoga: {
        colors,
        components: { autocomplete },
      },
    },
  }) => css`
    top: ${autocomplete.height}px;

    width: ${full ? '100%' : `${autocomplete.width}px`};
    max-height: ${autocomplete.height * 6}px;
    overflow-y: auto;
    box-sizing: border-box;

    background-color: ${autocomplete.field.backgroundColor};

    border-width: ${autocomplete.border.width}px;
    border-style: solid;
    border-color: ${autocomplete.border.color.typed};

    border-color: ${error
      ? colors.feedback.attention[1]
      : autocomplete.border.color.typed};

    border-top-width: 0;
    border-bottom-left-radius: ${autocomplete.border.radius}px;
    border-bottom-right-radius: ${autocomplete.border.radius}px;
  `}
`;

const Item = styled.li`
  box-sizing: border-box;

  list-style: none;

  cursor: pointer;

  ${({
    selected,
    theme: {
      yoga: {
        components: { autocomplete },
      },
    },
  }) => `
    padding:
      ${autocomplete.list.padding.top}px
      ${autocomplete.list.padding.right}px
      ${autocomplete.list.padding.bottom}px
      ${autocomplete.list.padding.left}px;

    background-color: ${autocomplete.list.backgroundColor.default};
    outline: none;

    font-size: ${autocomplete.list.font.size}px;
    font-weight: ${autocomplete.list.font.weight.default};
    line-height: ${autocomplete.list.font.lineHeight}px;

    &:hover {
      background-color: ${autocomplete.list.backgroundColor.hover};
    }

    ${
      selected
        ? `background-color: ${autocomplete.list.backgroundColor.hover};`
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
        components: { autocomplete },
      },
    },
  }) => `
    font-weight: ${autocomplete.list.font.weight.matched};
  `}
`;

/** The autocomplete is a normal input field enhanced by a panel of suggested options. */
const AutoComplete = React.forwardRef(
  (
    {
      className,
      style,
      full,
      options,
      onChange,
      onClean,
      onSelect,
      value,
      error,
      openSuggestionsAriaLabel,
      closeSuggestionsAriaLabel,
      shouldFilterOptions,
      ...props
    },
    ref,
  ) => {
    const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);

    const inputRef = useRef();

    const handleOpenSuggestions = useCallback(() => {
      inputRef.current?.focus();
      setIsSuggestionsOpen(true);
    }, []);

    const handleCloseSuggestions = useCallback(() => {
      setIsSuggestionsOpen(false);
    }, []);

    useEffect(() => {
      const handleKeyUp = ({ key }) => {
        return key === 'Escape' && handleCloseSuggestions();
      };

      window.addEventListener('keyup', handleKeyUp);
      return () => window.removeEventListener('keyup', handleKeyUp);
    }, []);

    return (
      <Downshift
        onSelect={(selected, selectedOptions) => {
          const newSelected = onSelect(selected);

          selectedOptions.setState({
            inputValue: newSelected,
          });
          handleCloseSuggestions();
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
            `(${escapeRegExp(inputValue || '').trim()})`,
            'gi',
          );

          const suggestionList = shouldFilterOptions
            ? options
                .filter(option => option.match(reg))
                .sort((first, second) =>
                  first.toLowerCase().indexOf(inputValue) <
                  second.toLowerCase().indexOf(inputValue)
                    ? -1
                    : 1,
                )
            : options;

          if (!!inputValue && isOpen) {
            setIsSuggestionsOpen(true);
          }

          return (
            <Wrapper
              className={className}
              style={style}
              full={full}
              isOpen={isSuggestionsOpen}
              {...getRootProps()}
              ref={ref}
              onBlur={handleCloseSuggestions}
            >
              <Input
                {...props}
                error={error}
                full={full}
                onClean={cleanable => {
                  onClean(cleanable);
                  clearSelection();
                  handleCloseSuggestions();
                }}
                {...getInputProps({
                  onFocus: () => (inputValue.length ? openMenu() : null),
                })}
                rightIcon={
                  isSuggestionsOpen ? (
                    <ChevronUp
                      onClick={handleCloseSuggestions}
                      aria-label={closeSuggestionsAriaLabel}
                    />
                  ) : (
                    <ChevronDown
                      onClick={handleOpenSuggestions}
                      aria-label={openSuggestionsAriaLabel}
                    />
                  )
                }
                ref={inputRef}
                includeAriaAttributes={false}
              />
              {isSuggestionsOpen && (
                <List {...getMenuProps()} full={full} error={!!error}>
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
                          !!inputValue && part.match(reg) ? (
                            <Match key={index}>{part}</Match>
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
  },
);

AutoComplete.propTypes = {
  className: string,
  full: bool,
  options: arrayOf(string),
  style: shape({}),
  /** callback to know when a user selects a suggestion */
  onSelect: func,
  /** called when user type or clean the field and when selects a suggestion */
  onChange: func,
  /** a callback to know when the user cleaned the field */
  onClean: func,
  value: string,
  error: string,
  /** an aria label for the open suggestions icon */
  openSuggestionsAriaLabel: string,
  /** an aria label for the close suggestions icon */
  closeSuggestionsAriaLabel: string,
  /** flag to enable options filtering */
  shouldFilterOptions: bool,
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
  error: undefined,
  openSuggestionsAriaLabel: 'Open suggestions',
  closeSuggestionsAriaLabel: 'Close suggestions',
  shouldFilterOptions: true,
};

export default AutoComplete;
