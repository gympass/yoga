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

import Helper from './Helper';

const ICON_SIZE = 20;

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
        baseFont,
        colors,
        components: { input },
      },
    },
  }) => `
    width: ${full ? '100%' : `${input.width}px`};

    padding-top: ${input.padding.top}px;
    padding-right: ${
      cleanable || textContentType === 'password'
        ? ICON_SIZE + input.padding.right * 2
        : input.padding.right
    }px;
    padding-bottom: ${input.padding.bottom}px;
    padding-left: ${input.padding.left}px;

    border-radius: ${input.border.radius}px;
    border: ${input.border.width}px solid ${input.border.color.default};

    color: ${input.font.color.default};
    font-family: ${baseFont.family};
    font-size: ${input.font.size}px;

    ${focus ? `border-color: ${input.border.color.typed};` : ''}
    ${focus || typed ? `color: ${input.font.color.focus};` : ''}
    ${error ? `border-color: ${colors.feedback.attention[1]};` : ''}

    ${
      disabled
        ? `
          border-color: ${colors.elements.lineAndBorders};
          color: ${colors.text.disabled};
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
        baseFont,
        components: { input },
      },
    },
  }) => `
    background-color: ${colors.white};

    font-family: ${baseFont.family};
    color: ${input.label.color.default};

    ${
      focus
        ? `
          color: ${input.label.color.focus};
        `
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

    ${error ? `color: ${colors.feedback.attention[1]};` : ''}
    ${disabled ? `color: ${colors.text.disabled};` : ''}
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

    padding-right: ${spacing.small}px;
    padding-left: ${spacing.small}px;
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
  onClean,
  onFocus,
  hideMaxLength,
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
  const [typed, setTyped] = useState(Boolean(value));

  useEffect(() => {
    setTyped(Boolean(value));
  }, [value]);

  const iconColor = () => {
    if (disabled) {
      return colors.elements.backgroundAndDisabled;
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
      duration: transition.duration[1],
      easing: Easing.bezier(...transition.timing[0]),
      useNativeDriver: false,
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
        value={value}
        onFocus={(e) => {
          setFocused(true);
          onFocus(e);
        }}
        onBlur={(e) => {
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
          onPress={() => {
            if (disabled) return;
            onClean('');
          }}
        >
          <CloseIcon>
            <Close height={input.height} width={20} fill={iconColor()} />
          </CloseIcon>
        </TouchableWithoutFeedback>
      )}
      {(helper || maxLength || error) && (
        <Helper
          full={full}
          error={error}
          helper={helper}
          focused={focused}
          disabled={disabled}
          maxLength={maxLength}
          length={value.length}
          hideMaxLength={hideMaxLength}
        />
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
  value: oneOfType([string, number]),
  style: oneOfType([shape({}), arrayOf(shape({}))]),
  onBlur: func,
  /** callback invoked when close icon is clicked */
  onClean: func,
  onFocus: func,
  hideMaxLength: bool,
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
  onClean: () => {},
  onFocus: () => {},
  hideMaxLength: false,
};

export default withTheme(Input);
