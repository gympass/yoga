import React from 'react';
import { number, arrayOf, bool, func, node } from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { TouchableWithoutFeedback } from 'react-native';
import {
  backgroundColor,
  borders as systemBorders,
  elevation,
  positions,
  display,
  spacing as systenSpacing,
  typography,
} from '@gympass/yoga-system';

import Counter from './Counter';
import { theme } from '../../Theme';
import Text from '../../Text';
import Icon from '../../Icon';

const Wrapper = styled.View`
  height: 32px;
  max-width: 216px;

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin-right: ${theme.spacing.xxsmall}px;
  padding: ${theme.spacing.xxsmall}px;

  border-style: solid;
  border-color: ${theme.colors.elements.lineAndBorders};
  border-radius: ${theme.radii.small}px;
  border-width: ${theme.borders.small}px;

  background-color: ${theme.colors.white};

  overflow: hidden;

  ${({ disabled }) =>
    disabled
      ? css`
          background-color: ${theme.colors.elements.backgroundAndDisabled};
          color: ${theme.colors.elements.selectionAndIcons};

          border-color: ${theme.colors.elements.lineAndBorders};
        `
      : ''}

  ${({ selected }) =>
    selected
      ? css`
          background-color: ${theme.colors.yoga};
          border-color: transparent;
        `
      : ''}

  ${backgroundColor}
  ${systemBorders}
  ${systenSpacing}
  ${elevation}
  ${positions}
  ${display}
  ${typography}
`;

const StyledChips = styled(Text)`
  font-size: ${theme.fontSizes.xsmall}px;
  line-height: ${theme.lineHeights.xsmall}px;

  flex-shrink: 1;

  ${({ selected }) =>
    selected
      ? css`
          color: ${theme.colors.primary};
        `
      : ''}
`;

const Chips = ({
  children,
  selected,
  counter,
  icons,
  disabled,
  onToggle,
  onPress = onToggle,
  theme: {
    yoga: { spacing },
  },
  ...props
}) => {
  const [FirstIcon, SecondIcon] = icons;

  return (
    <TouchableWithoutFeedback onPress={onPress} {...props}>
      <Wrapper disabled={disabled} selected={selected}>
        {SecondIcon && (
          <Icon
            as={SecondIcon}
            fill={selected ? 'primary' : 'secondary'}
            width="small"
            height="small"
            style={{
              marginRight: children ? spacing.xxxsmall : undefined,
            }}
          />
        )}
        <StyledChips
          as={selected ? Text.Medium : Text}
          selected={selected}
          numberOfLines={1}
        >
          {children}
        </StyledChips>
        {selected && counter && !disabled && <Counter value={counter} />}
        {FirstIcon && (
          <Icon
            as={FirstIcon}
            fill={selected ? 'primary' : 'secondary'}
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
};

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
