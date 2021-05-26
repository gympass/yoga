import React from 'react';
import styled from 'styled-components';
import { node, number, arrayOf, bool, func } from 'prop-types';
import { hexToRgb } from '@gympass/yoga-common';

import { theme } from '../../Theme';
import Icon from '../../Icon';

import Counter from './Counter';

const Text = styled.span`
  display: inline-block;
  box-sizing: border-box;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Wrapper = styled.button`
  height: 32px;
  max-width: 216px;

  display: flex;
  align-items: center;
  box-sizing: border-box;

  border-style: solid;

  cursor: pointer;

  ${({ selected, ...props }) => {
    const {
      spacing,
      borders,
      colors,
      radii,
      baseFont,
      fontSizes,
      fontWeights,
      lineHeights,
    } = theme(props);

    const commonStyles = `

      padding: ${spacing.xxsmall}px;

      border-radius: ${radii.small}px;
      border-width: ${borders.small}px;

      font-family: ${baseFont.family};
      font-size: ${fontSizes.xsmall}px;
      line-height: ${lineHeights.xsmall}px;

      :not(:last-child) {
        margin-right: ${spacing.small}px;
      }

      &[disabled] {
        background-color: ${colors.elements.backgroundAndDisabled};
        color: ${colors.elements.selectionAndIcons};

        border-color: ${colors.elements.lineAndBorders};

        cursor: not-allowed;
      }

      svg {
        flex-shrink: 0;
      }

      svg:first-child {
        margin-right: ${spacing.xxxsmall}px;
      }

      svg:last-child {
        margin-left: ${spacing.xxxsmall}px;
      }
    `;

    if (selected) {
      return `
        ${commonStyles}

        background-color: ${colors.yoga};
        color: ${colors.secondary};

        border-color: transparent;

        font-weight: ${fontWeights.medium};

        &:hover:enabled {
          border-color: ${colors.secondary};
        }
      `;
    }

    return `
      ${commonStyles}

      border-color: ${colors.elements.lineAndBorders};

      background-color: ${colors.white};
      color: ${colors.primary};

      font-weight: ${fontWeights.regular};

      &:hover:enabled {
        border-color: ${colors.primary};
      }

      &:focus:enabled,
      &:active:enabled {
        border-color: ${hexToRgb(colors.elements.lineAndBorders, 0.75)};
      }
    `;
  }}
`;

const Chips = ({
  children,
  selected,
  counter,
  icons,
  disabled,
  onToggle,
  onClick = onToggle,
  ...props
}) => {
  const [FirstIcon, SecondIcon] = icons;

  return (
    <Wrapper
      selected={selected}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {SecondIcon && (
        <Icon
          as={SecondIcon}
          fill={selected ? 'secondary' : 'primary'}
          width="small"
          height="small"
        />
      )}
      <Text>{children}</Text>
      {selected && counter && !disabled && <Counter value={counter} />}
      {FirstIcon && (
        <Icon
          as={FirstIcon}
          fill={selected ? 'secondary' : 'primary'}
          width="small"
          height="small"
        />
      )}
    </Wrapper>
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
  icons: arrayOf(node),
  /** click event */
  onToggle: func,
  onClick: func,
};

Chips.defaultProps = {
  children: undefined,
  selected: false,
  disabled: false,
  counter: undefined,
  icons: [],
  onToggle: () => {},
  onClick: () => {},
};

export default Chips;
