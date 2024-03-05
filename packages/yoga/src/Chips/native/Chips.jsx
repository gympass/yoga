import React from 'react';
import { number, arrayOf, bool, func, node } from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { TouchableWithoutFeedback } from 'react-native';
import { hexToRgb } from '@gympass/yoga-common';

import Counter from './Counter';
import { theme } from '../../Theme';
import Text from '../../Text';
import Icon from '../../Icon';

const BORDER_OPACITY = 0.4;

const Wrapper = styled.View.attrs(({ theme: { yoga } }) => {
  return {
    borderColor: hexToRgb(yoga.colors.secondary, BORDER_OPACITY),
  };
})`
  height: 32px;
  max-width: 216px;

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin-right: ${theme.spacing.xxsmall}px;
  padding: ${theme.spacing.xxxsmall}px ${theme.spacing.xsmall}px;

  border-style: solid;
  border-radius: ${theme.radii.circle}px;
  border-width: ${theme.borders.small}px;

  background-color: ${theme.colors.white};

  overflow: hidden;

  ${({ disabled }) =>
    disabled
      ? css`
          background-color: ${theme.colors.elements.backgroundAndDisabled};
          border-color: ${theme.colors.elements.backgroundAndDisabled};
        `
      : ''}

  ${({ selected }) =>
    selected
      ? css`
          background-color: ${theme.colors.secondary};
        `
      : ''}

  ${({ justAnIcon }) =>
    justAnIcon
      ? css`
          padding: ${theme.spacing.xxsmall}px;
        `
      : ''}
`;

const StyledChips = styled(Text)`
  font-size: ${theme.fontSizes.xsmall}px;
  line-height: ${theme.lineHeights.xsmall}px;

  flex-shrink: 1;

  ${({ disabled }) =>
    disabled
      ? css`
          color: ${theme.colors.text.disabled};
        `
      : ''}

  ${({ selected }) =>
    selected
      ? css`
          color: ${theme.colors.white};
        `
      : ''}
`;

const Chips = React.forwardRef(
  (
    {
      children,
      selected,
      counter,
      icons,
      disabled,
      onToggle,
      onPress = onToggle,
      theme: {
        yoga: { spacing, colors },
      },
      ...props
    },
    ref,
  ) => {
    const [FirstIcon, SecondIcon] = icons;
    const justAnIcon = (icons[0] || icons[1]) && !children;
    const fillSelected = selected ? 'white' : 'secondary';
    const fillIcon = disabled ? colors.text.disabled : fillSelected;

    return (
      <TouchableWithoutFeedback
        onPress={onPress}
        ref={ref}
        accessibilityRole="button"
        {...props}
      >
        <Wrapper
          disabled={disabled}
          selected={selected}
          justAnIcon={justAnIcon}
        >
          {SecondIcon && (
            <Icon
              as={SecondIcon}
              fill={fillIcon}
              width="small"
              height="small"
              style={{
                marginRight: children ? spacing.xxxsmall : undefined,
              }}
            />
          )}
          <StyledChips
            disabled={disabled}
            as={selected ? Text.Bold : Text}
            selected={selected}
            numberOfLines={1}
          >
            {children}
          </StyledChips>
          {selected && counter && !disabled && <Counter value={counter} />}
          {FirstIcon && (
            <Icon
              as={FirstIcon}
              fill={fillIcon}
              width="small"
              height="small"
              style={{
                marginLeft: children ? spacing.xxxsmall : undefined,
              }}
            />
          )}
        </Wrapper>
      </TouchableWithoutFeedback>
    );
  },
);

Chips.propTypes = {
  /** text to be displayed */
  children: node,
  /** if the chip is selected */
  selected: bool,
  /** will display a three digit number, if the value is greater than 999 a plus
   * sign will be displayed instead. ex: "+999" */
  counter: number,
  /** disable chip */
  disabled: bool,
  /** a list of max two icons from @gympass/yoga-icons package */
  icons: arrayOf(func),
  /** onPress event */
  onToggle: func,
  onPress: func,
};

Chips.defaultProps = {
  children: undefined,
  selected: false,
  disabled: false,
  counter: undefined,
  icons: [],
  onToggle: undefined,
  onPress: undefined,
};

export default withTheme(Chips);
