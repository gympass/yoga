import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Animated, Easing } from 'react-native';
import { func, string, bool, number } from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Close } from '@gympass/yoga-icons';

const ICON_SIZE = 24;

const Wrapper = styled.View(
  ({
    theme: {
      yoga: { spacing },
    },
  }) => `
    margin: ${spacing.xsmall}px;
  `,
);

const Field = styled.TextInput(
  ({
    disabled,
    error,
    focus,
    theme: {
      yoga: {
        colors,
        components: { input },
      },
    },
  }) => `
    width: ${input.width}px;
    height: ${input.height}px;

    padding-top: ${input.padding.top}px;
    padding-right: ${ICON_SIZE + input.padding.right * 2}px;
    padding-bottom: ${input.padding.bottom}px;
    padding-left: ${input.padding.left}px;

    border-radius: ${input.border.radius}px;
    border: ${input.border.width}px solid ${input.border.color.default};

    color: ${input.font.color.default};
    font-size: ${input.font.size}px;
    font-weight: ${input.font.weight};

    ${
      focus
        ? `
        color: ${input.font.color.focus};
      `
        : ''
    }

    ${error ? `border-color: ${colors.negative[1]};` : ''}
    ${
      disabled
        ? `
      border-color: ${colors.disabled.background};
      color: ${colors.disabled.background};
    `
        : ''
    }
  `,
);

const Label = styled.Text(
  ({
    disabled,
    error,
    focus,
    typed,
    theme: {
      yoga: {
        colors,
        components: { input },
      },
    },
  }) => `
    position: absolute;
    left: ${input.padding.left}px;
  
    background-color: ${colors.gray.surface};

    font-size: ${input.label.font.size.default}px;
    font-weight: ${input.label.font.weight.default};
    color: ${input.label.color};

    transform: translateY(-${input.padding.top / 2}px);

    ${
      focus || typed
        ? `
      left: ${input.padding.left - 2}px;

      padding-right: ${input.label.padding.right}px;
      padding-left: ${input.label.padding.left}px;

      font-size: ${input.label.font.size.typed}px;
      font-weight: ${input.label.font.weight.typed};
    `
        : ''
    }

    ${error ? `color: ${colors.negative[1]};` : ''}
    ${
      disabled
        ? `
      color: ${colors.disabled.background};
    `
        : ''
    }
  `,
);

const CloseIcon = styled.View(
  ({
    theme: {
      yoga: { spacing },
    },
  }) => `
    position: absolute;
    top: 0px;
    right: 0px;

    padding-right: ${spacing.xsmall}px;
    padding-left: ${spacing.xsmall}px;
  `,
);

const Helper = styled.View(
  ({
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) => `
    margin-top: ${input.helper.margin.top}px;
    flex-direction: row;
  `,
);

const Info = styled.Text(
  ({
    disabled,
    error,
    right,
    theme: {
      yoga: {
        colors,
        components: { input },
      },
    },
  }) => `
    font-size: ${input.helper.font.size}px;
    
    ${right ? 'margin-left: auto;' : ''}
    ${error ? `color: ${colors.negative[1]};` : ''}
    ${disabled ? `color: ${colors.disabled.background}` : ''}
  `,
);

const Input = ({
  cleanable,
  disabled,
  error,
  helper,
  label,
  maxLength,
  value,
  onBlur,
  onChangeText,
  onFocus,
  theme: {
    yoga: {
      colors,
      components: { input },
    },
  },
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');
  const [typed, setTyped] = useState(Boolean(value));
  const labelPosition = new Animated.Value(0);
  const labelFontSize = new Animated.Value(0);

  useEffect(() => {
    labelPosition.setValue(0);
    Animated.timing(labelPosition, {
      toValue: 1,
      duration: 500,
      easing: Easing.bezier(0, 0.75, 0.1, 1),
    }).start();

    labelFontSize.setValue(0);
    Animated.timing(labelFontSize, {
      toValue: 1,
      duration: 500,
      easing: Easing.bezier(0, 0.75, 0.1, 1),
    }).start();
  }, [focused, typed]);

  return (
    <Wrapper>
      <Field
        editable={!disabled}
        disabled={disabled}
        error={error}
        focus={focused}
        maxLength={maxLength}
        value={inputValue}
        onBlur={e => {
          onBlur(e);
          setFocused(false);
        }}
        onChangeText={text => {
          setTyped(Boolean(text));
          setInputValue(text);
          onChangeText(text);
        }}
        onFocus={e => {
          onFocus(e);
          setFocused(true);
        }}
        {...props}
      />
      {label && (
        <Label
          disabled={disabled}
          error={error}
          as={Animated.Text}
          focus={focused}
          pointerEvents="none"
          typed={typed}
          style={{
            top: focused
              ? labelPosition.interpolate({
                  inputRange: [0, 1],
                  outputRange: [input.padding.top * 1.5, 0],
                })
              : labelPosition.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, input.padding.top * 1.5],
                }),
            fontSize: focused
              ? labelFontSize.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    input.label.font.size.default,
                    input.label.font.size.typed,
                  ],
                })
              : labelFontSize.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    input.label.font.size.typed,
                    input.label.font.size.default,
                  ],
                }),
          }}
        >
          {label}
        </Label>
      )}
      {cleanable && typed && (
        <TouchableWithoutFeedback
          onPress={() => {
            if (disabled) return;
            setInputValue('');
            setTyped(false);
          }}
        >
          <CloseIcon>
            <Close
              height={input.height}
              fill={
                disabled ? colors.disabled.background : input.font.color.default
              }
            />
          </CloseIcon>
        </TouchableWithoutFeedback>
      )}
      {(helper || maxLength || error) && (
        <Helper>
          {(error || helper) && (
            <Info disabled={disabled} error={error}>
              {error || helper}
            </Info>
          )}
          {maxLength && (
            <Info right error={error} disabled={disabled}>
              {inputValue.length}/{maxLength}
            </Info>
          )}
        </Helper>
      )}
    </Wrapper>
  );
};

Input.propTypes = {
  cleanable: bool,
  disabled: bool,
  error: string,
  helper: string,
  label: string,
  maxLength: number,
  value: string,
  onBlur: func,
  onChangeText: func,
  onFocus: func,
};

Input.defaultProps = {
  cleanable: true,
  disabled: false,
  error: undefined,
  helper: undefined,
  label: undefined,
  maxLength: undefined,
  value: undefined,
  onBlur: () => {},
  onChangeText: () => {},
  onFocus: () => {},
};

export default withTheme(Input);
