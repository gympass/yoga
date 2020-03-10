/* eslint react/no-array-index-key: 0 */
import React, { useState, useRef, useEffect } from 'react';
import { arrayOf, string, func, bool, shape } from 'prop-types';
import styled from 'styled-components';

import Input from '../../Input/web/Input';

const escapeRegExp = str => str.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');

const StyledInput = styled(Input)`
  z-index: 1;

  ${({
    showOptions,
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) =>
    showOptions
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

    background-color: ${autoComplete.field.backgroundColor};
    border:
      ${autoComplete.border.width}px solid ${autoComplete.border.color.typed};
    border-top-width: 0;

    border-bottom-left-radius: ${autoComplete.border.radius}px;
    border-bottom-right-radius: ${autoComplete.border.radius}px;

    max-height: ${autoComplete.height * 6}px;
    overflow: hidden;
  `}
`;

const Item = styled.li`
  line-height: 20px;
  list-style: none;

  cursor: pointer;

  ${({
    theme: {
      yoga: {
        components: { autoComplete },
      },
    },
  }) => `
    background-color: ${autoComplete.list.backgroundColor.default};
    outline: none;

    font-size: ${autoComplete.list.font.size}px;
    font-weight: ${autoComplete.list.font.weight.default};

    padding:
      ${autoComplete.list.padding.top}px
      ${autoComplete.list.padding.right}px
      ${autoComplete.list.padding.bottom}px
      ${autoComplete.list.padding.left}px;

    &:hover,
    &:focus {
      background-color: ${autoComplete.list.backgroundColor.hover};
    }
  `}
`;

const Match = styled.mark`
  color: inherit;
  background: transparent;

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
  value,
  onSelect,
  onChange,
  onClean,
  onFocus,
  ...props
}) => {
  const [showOption, setShowOption] = useState(false);
  const [focusedOption, setFocusedOption] = useState(null);

  const inputRef = useRef(null);
  const optionsRef = useRef(null);

  const reg = new RegExp(`(${escapeRegExp(value || '').trim() || null})`, 'gi');

  useEffect(() => {
    const windowClick = ({ target }) => {
      if (!inputRef.current?.contains(target)) {
        setShowOption(false);
        setFocusedOption(null);
      }
    };

    window.addEventListener('click', windowClick);

    return () => {
      window.removeEventListener('click', windowClick);
    };
  }, []);

  const closeOptions = () => {
    setShowOption(false);
    setFocusedOption(null);
  };

  const handleSelect = e => {
    inputRef.current.focus();
    closeOptions();
    onSelect(e.target.textContent);
  };

  const handleKeyDown = e => {
    const { key, shiftKey } = e;

    if (key === 'Escape') {
      inputRef.current.focus();
      closeOptions();
    }

    if (key === 'Enter' && focusedOption) {
      handleSelect(e);
    }

    if (key === 'ArrowDown' || (key === 'Tab' && !shiftKey)) {
      if (!showOption) {
        return;
      }

      e.preventDefault();
      if (!focusedOption && optionsRef.current) {
        setFocusedOption(optionsRef.current.firstChild);
        optionsRef.current.firstChild.focus();
      }

      if (focusedOption && focusedOption.nextElementSibling) {
        focusedOption.nextElementSibling.focus();
        setFocusedOption(focusedOption.nextElementSibling);
      }
    }

    if (key === 'ArrowUp' || (key === 'Tab' && shiftKey)) {
      if (!showOption) {
        return;
      }

      e.preventDefault();
      if (
        optionsRef.current &&
        focusedOption === optionsRef.current.firstChild
      ) {
        setFocusedOption(null);
        inputRef.current.focus();
      }

      if (focusedOption && focusedOption.previousElementSibling) {
        focusedOption.previousElementSibling.focus();
        setFocusedOption(focusedOption.previousElementSibling);
      }
    }
  };

  const handleChange = e => {
    setShowOption(true);
    onChange(e);
  };

  const renderList = optionsList => {
    const inputedValue = value?.toLowerCase().trim();

    const list = optionsList
      .filter(option => option.match(reg))
      .sort((first, second) =>
        first.toLowerCase().indexOf(inputedValue) <
        second.toLowerCase().indexOf(inputedValue)
          ? -1
          : 1,
      )
      .slice(0, 6)
      .map(option => (
        <Item key={option} tabIndex={0} onClick={handleSelect}>
          {option
            .split(reg)
            .map((part, index) =>
              part.match(reg) ? (
                <Match key={`${index}`}>{part}</Match>
              ) : (
                <React.Fragment key={`unmatch-${index}`}>{part}</React.Fragment>
              ),
            )}
        </Item>
      ));

    if (!list.length) {
      setShowOption(false);

      return null;
    }

    return list;
  };

  return (
    <Wrapper
      className={className}
      style={style}
      onKeyDown={handleKeyDown}
      full={full}
    >
      <StyledInput
        {...props}
        full={full}
        onChange={handleChange}
        onClean={cleanable => {
          closeOptions();
          onClean(cleanable);
        }}
        onFocus={e => {
          setShowOption(Boolean(value));
          onFocus(e);
        }}
        ref={inputRef}
        showOptions={showOption}
        value={value}
      />
      {options && showOption && (
        <List ref={optionsRef} full={full}>
          {renderList(options)}
        </List>
      )}
    </Wrapper>
  );
};

AutoComplete.propTypes = {
  className: string,
  full: bool,
  options: arrayOf(string),
  style: shape({}),
  value: string,
  onSelect: func,
  onChange: func,
  onClean: func,
  onFocus: func,
};

AutoComplete.defaultProps = {
  className: undefined,
  full: false,
  options: undefined,
  style: undefined,
  value: '',
  onSelect: () => {},
  onChange: () => {},
  onClean: () => {},
  onFocus: () => {},
};

export default AutoComplete;
