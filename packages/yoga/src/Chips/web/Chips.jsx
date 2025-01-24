import React from 'react';
import styled, { withTheme } from 'styled-components';
import { node, number, arrayOf, bool, func, oneOfType } from 'prop-types';
import { hexToRgb } from '@gympass/yoga-common';

import { theme } from '../../Theme';
import Icon from '../../Icon';

import Counter from './Counter';
import Text from '../../Text';

const BORDER_OPACITY = 0.4;
const BORDER_PRESSED_OPACITY = 0.6;

const Wrapper = styled.button`
  height: 32px;
  max-width: 216px;

  display: flex;
  align-items: center;
  box-sizing: border-box;

  border-style: solid;

  cursor: pointer;

  ${({ selected, justAnIcon, ...props }) => {
    const { spacing, borders, colors, radii } = theme(props);

    const commonStyles = `

      padding: ${
        justAnIcon
          ? `${spacing.xxsmall}px`
          : `${spacing.xxsmall}px ${spacing.xsmall}px`
      };

      border-radius: ${radii.circle}px;
      border-width: ${borders.small}px;

      :not(:last-child) {
        margin-right: ${spacing.xxsmall}px;
      }

      &[disabled] {
        background-color: ${colors.elements.backgroundAndDisabled};
        p {
          color: ${colors.text.disabled};
        }
        border-color: ${colors.elements.backgroundAndDisabled};

        cursor: not-allowed;

        svg {
          fill: ${colors.text.disabled};
        }
      }

      svg {
        flex-shrink: 0;
      }
    `;

    if (selected) {
      return `
        ${commonStyles}

        p {
          color: ${colors.white};
        }

        background-color: ${colors.secondary};


        border-color: transparent;

        &:hover:enabled {
          border-color: ${colors.secondary};
        }

        &:active:enabled {
          background-color: ${hexToRgb(
            colors.secondary,
            BORDER_PRESSED_OPACITY,
          )};
          border-color: transparent;
        }
      `;
    }

    return `
      ${commonStyles}

      border-color: ${hexToRgb(colors.secondary, BORDER_OPACITY)};

      background-color: ${colors.white};
      p {
        color: ${colors.secondary};
      }
      &:hover:enabled {
        border-color: ${colors.secondary};
      }

      &:active:enabled {
        border-color: ${hexToRgb(colors.secondary, BORDER_PRESSED_OPACITY)};
        p {
          color: ${hexToRgb(colors.secondary, BORDER_PRESSED_OPACITY)};
        }

        svg {
          fill: ${hexToRgb(colors.secondary, BORDER_PRESSED_OPACITY)};
        }
      }
    `;
  }}
`;

const Chips = React.forwardRef(
  (
    {
      children,
      selected = false,
      counter,
      icons = [],
      disabled = false,
      onToggle,
      onClick = onToggle,
      theme: {
        yoga: { spacing },
      },
      ...props
    },
    ref,
  ) => {
    const [FirstIcon, SecondIcon] = icons;
    const justAnIcon = (icons[0] || icons[1]) && !children;

    const TextComponent = selected || disabled ? Text.Overline : Text.Caption;

    return (
      <Wrapper
        selected={selected}
        disabled={disabled}
        onClick={onClick}
        ref={ref}
        justAnIcon={justAnIcon}
        type="button"
        {...props}
      >
        {SecondIcon && (
          <Icon
            as={SecondIcon}
            fill={selected ? 'white' : 'secondary'}
            width="small"
            height="small"
            style={{
              marginRight: children ? spacing.xxxsmall : undefined,
            }}
          />
        )}
        {children && <TextComponent>{children}</TextComponent>}
        {selected && counter && !disabled && <Counter value={counter} />}
        {FirstIcon && (
          <Icon
            as={FirstIcon}
            fill={selected ? 'white' : 'secondary'}
            width="small"
            height="small"
            style={{
              marginLeft: children ? spacing.xxxsmall : undefined,
            }}
          />
        )}
      </Wrapper>
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
  icons: arrayOf(oneOfType([node, func])),
  /** click event */
  onToggle: func,
  onClick: func,
};

export default withTheme(Chips);
