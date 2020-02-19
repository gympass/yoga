import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Animated, Easing } from 'react-native';
import {
  func,
  string,
  bool,
  number,
  oneOfType,
  shape,
  arrayOf,
} from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Close } from '@gympass/yoga-icons';

const ICON_SIZE = 24;

const Wrapper = styled.View(
  ({
    full,
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) => `
    position: relative;
    width: ${full ? '100%' : `${input.width}px`};
  `,
);

const Field = styled.TextInput(
  ({
    cleanable,
    disabled,
    error,
    focus,
    full,
    textContentType,
    typed,
    theme: {
      yoga: {
        colors,
        components: { input },
      },
    },
  }) => `
    width: ${full ? '100%' : `${input.width}px`};

    padding-top: ${input.padding.top}px;
    padding-right: ${
      cleanable || textContentType === 'password'
        ? ICON_SIZE + input.padding.right
        : input.padding.right
    }px;
    padding-bottom: ${input.padding.bottom}px;
    padding-left: ${input.padding.left}px;

    border-radius: ${input.border.radius}px;
    border: ${input.border.width}px solid ${input.border.color.default};

    color: ${input.font.color.default};
    font-size: ${input.font.size}px;
    font-weight: ${input.font.weight};

    ${focus ? `border-color: ${input.border.color.typed};` : ''}
    ${focus || typed ? `color: ${input.font.color.focus};` : ''}
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

    ${focus || typed ? `left: ${input.padding.left - 2}px;` : ''}
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
    color: ${input.label.color.default};

    ${
      focus
        ? `
          color: ${input.label.color.focus};
          font-weight: ${input.label.font.weight.typed};`
        : ''
    }

    ${
      focus || typed
        ? `
        padding-right: ${input.label.padding.right}px;
        padding-left: ${input.label.padding.left}px;
      `
        : ''
    }

    ${error ? `color: ${colors.negative[1]};` : ''}
    ${disabled ? `color: ${colors.disabled.background};` : ''}
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

    padding-right: ${spacing.medium}px;
    padding-left: ${spacing.xsmall}px;
  `,
);

const Helper = styled.View(
  ({
    full,
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) => `
    width: ${full ? '100%' : `${input.width}px`};
    max-width: ${input.width}px;
    flex-direction: row;

    margin-top: ${input.helper.margin.top}px;
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
    flex-shrink: ${right ? '0' : '1'};
    flex-wrap: wrap;

    color: ${input.helper.color};
    font-size: ${input.helper.font.size}px;
    
    ${error ? `color: ${colors.negative[1]};` : ''}
    ${disabled ? `color: ${colors.disabled.background}` : ''}
    ${right ? 'margin-left: auto;' : ''}
  `,
);

const Input = ({
  cleanable,
  disabled,
  error,
  full,
  helper,
  label,
  maxLength,
  readOnly,
  style,
  textContentType,
  value,
  onBlur,
  onChangeText,
  onClean,
  onFocus,
  theme: {
    yoga: {
      colors,
      transition,
      components: { input },
    },
  },
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [typed, setTyped] = useState(Boolean(value));

  useEffect(() => {
    setInputValue(value);
    setTyped(Boolean(value));
  }, [value]);

  const iconColor = () => {
    if (disabled) {
      return colors.disabled.background;
    }

    if (focused) {
      return input.font.color.focus;
    }

    return input.font.color.default;
  };

  const [labelTopAnimation] = useState(
    new Animated.Value(input.padding.top * 1.5),
  );
  const [fontSizeAnimation] = useState(
    new Animated.Value(input.label.font.size.default),
  );

  const animate = (animation, toValue) =>
    Animated.timing(animation, {
      toValue,
      duration: transition.duration[0],
      easing: Easing.bezier(...transition.timing[0]),
    }).start();

  useEffect(() => {
    const shouldAnimate = typed || focused;

    animate(labelTopAnimation, shouldAnimate ? 1 : input.padding.top * 1.5);
    animate(
      fontSizeAnimation,
      shouldAnimate
        ? input.label.font.size.typed
        : input.label.font.size.default,
    );
  }, [focused, typed]);

  const { height = input.height, ...styles } = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;
  return (
    <Wrapper full={full} style={styles}>
      <Field
        {...props}
        cleanable={cleanable}
        disabled={disabled}
        editable={!(readOnly || disabled)}
        error={error}
        focus={focused}
        full={full}
        maxLength={maxLength}
        style={{
          height,
        }}
        textContentType={textContentType}
        typed={typed}
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
      />
      {Boolean(label) && (
        <LabelWrapper
          focus={focused}
          pointerEvents="none"
          typed={typed}
          style={{ top: labelTopAnimation }}
        >
          <Label
            disabled={disabled}
            error={error}
            focus={focused}
            typed={typed}
            style={{ fontSize: fontSizeAnimation }}
          >
            {label}
          </Label>
        </LabelWrapper>
      )}
      {cleanable && typed && (
        <TouchableWithoutFeedback
          accessibilityRole="button"
          onPress={e => {
            if (disabled) return;
            setInputValue('');
            setTyped(false);
            onChangeText('');
            onClean(e);
          }}
        >
          <CloseIcon>
            <Close height={input.height} width={20} fill={iconColor()} />
          </CloseIcon>
        </TouchableWithoutFeedback>
      )}
      {(helper || maxLength || error) && (
        <Helper full={full}>
          {(error || helper) && (
            <Info disabled={disabled} error={error}>
              {error || helper}
            </Info>
          )}
          {maxLength && (
            <Info disabled={disabled} error={error} right>
              {inputValue.length}/{maxLength}
            </Info>
          )}
        </Helper>
      )}
    </Wrapper>
  );
};

Input.propTypes = {
  /** display a close icon to clean the field */
  cleanable: bool,
  disabled: bool,
  error: string,
  full: bool,
  /** A helper text to be displayed below field */
  helper: string,
  label: string,
  /** maximum length (number of characters) of value */
  maxLength: number,
  readOnly: bool,
  textContentType: string,
  value: string,
  style: oneOfType([shape({}), arrayOf(shape({}))]),
  onBlur: func,
  onChangeText: func,
  /** callback invoked when close icon is clicked */
  onClean: func,
  onFocus: func,
};

Input.defaultProps = {
  cleanable: true,
  disabled: false,
  error: undefined,
  full: false,
  helper: undefined,
  label: '',
  maxLength: undefined,
  readOnly: false,
  style: {},
  textContentType: undefined,
  value: '',
  onBlur: () => {},
  onChangeText: () => {},
  onClean: () => {},
  onFocus: () => {},
};

export default withTheme(Input);
