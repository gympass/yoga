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

const LabelWrapper = styled(Animated.View)(
  ({
    focus,
    typed,
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) => `
    position: absolute;
    left: ${input.padding.left}px;

    transform: translateY(-${input.padding.top / 2}px);

    ${
      focus || typed
        ? `
      left: ${input.padding.left - 2}px;
    `
        : ''
    }
  `,
);

const Label = styled(Animated.Text)(
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
    
    background-color: ${colors.gray.surface};

    font-weight: ${input.label.font.weight.default};

    color: ${input.label.color};

    ${
      focus || typed
        ? `
        font-weight: ${input.label.font.weight.typed};

        padding-right: ${input.label.padding.right}px;
        padding-left: ${input.label.padding.left}px;
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

  const [labelTopAnimation] = useState(
    new Animated.Value(input.padding.top * 1.5),
  );
  const [fontSizeAnimation] = useState(
    new Animated.Value(input.label.font.size.default),
  );

  const animate = (animation, toValue) =>
    Animated.timing(animation, {
      toValue,
      duration: 500,
      easing: Easing.bezier(0, 0.75, 0.1, 1),
    }).start();

  useEffect(() => {
    const isTyped = typed || focused;

    animate(labelTopAnimation, isTyped ? 0 : input.padding.top * 1.5);
    animate(
      fontSizeAnimation,
      isTyped ? input.label.font.size.typed : input.label.font.size.default,
    );
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
        onChangeText={text => {
          setTyped(Boolean(text));
          setInputValue(text);
          onChangeText(text);
        }}
        onFocus={e => {
          setFocused(true);
          onFocus(e);
        }}
        onBlur={e => {
          setFocused(false);
          onBlur(e);
        }}
        {...props}
      />
      {label && (
        <LabelWrapper
          focus={focused}
          typed={typed}
          style={{ top: labelTopAnimation }}
        >
          <Label
            disabled={disabled}
            error={error}
            focus={focused}
            pointerEvents="none"
            typed={typed}
            style={{ fontSize: fontSizeAnimation }}
          >
            {label}
          </Label>
        </LabelWrapper>
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
