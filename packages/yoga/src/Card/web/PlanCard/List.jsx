import React, { isValidElement } from 'react';
import styled, { css, withTheme } from 'styled-components';
import { string, node, shape, oneOfType, func } from 'prop-types';

import Text from '../../../Text';
import theme from '../../../Theme/helpers/themeReader';
import Box from '../../../Box';

const { card, cardweb } = theme.components;

const truncateStyle = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const List = styled.ul`
  margin: ${cardweb.plan.list.margin.top}px 0 0;
  padding: 0;

  list-style: none;
`;

const IconWrapper = styled.div`
  display: flex;
  margin-right: ${cardweb.plan.list.item.icon.margin.right}px;
`;

const Item = styled.li`
  :not(:last-child) {
    margin-bottom: ${card.plan.list.item.margin.bottom}px;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  min-width: 0;
  align-items: center;

  ${props =>
    props.as === 'button' &&
    css`
      border: none;
      padding: 0;
      background: transparent;
      cursor: pointer;
    `}

  svg {
    flex-shrink: 0;
  }
`;

const ItemText = styled(Text.Small)`
  display: inline-block;
  height: 100%;
  vertical-align: middle;

  color: ${card.plan.list.item.font.color};

  ${truncateStyle}
`;

const Button = styled.button`
  display: block;
  padding: 0;
  margin-top: ${card.plan.list.button.margin.top}px;

  width: 100%;

  letter-spacing: normal;

  background-color: transparent;
  border: none;

  font-family: ${theme.baseFont.family};
  font-size: ${card.plan.list.button.font.size}px;
  font-weight: ${card.plan.list.button.font.weight};
  color: ${card.plan.list.button.font.color};

  cursor: pointer;
  text-decoration: none;
  text-align: left;
  outline: none;

  ${truncateStyle}
`;

const ListItem = withTheme(
  ({ text, icon: Icon, buttonProps, theme: yogaTheme, onClick }) => {
    const wrapperProps = onClick
      ? { as: 'button', type: 'button', onClick }
      : {};

    return (
      <Item>
        <Wrapper {...wrapperProps}>
          {Icon && (
            <IconWrapper>
              {isValidElement(Icon) ? (
                Icon
              ) : (
                <Icon
                  width={16}
                  height={16}
                  fill={yogaTheme.yoga.colors.text.primary}
                />
              )}
            </IconWrapper>
          )}
          <ItemText as="span">{text}</ItemText>
        </Wrapper>
        {Boolean(Object.keys(buttonProps).length) && (
          <Button {...buttonProps} />
        )}
      </Item>
    );
  },
);

List.displayName = 'PlanCard.List';
ListItem.displayName = 'PlanCard.ListItem';
Button.displayName = 'PlanCard.ListButton';

ListItem.propTypes = {
  text: oneOfType([string, node]).isRequired,
  /** an icon to be displayed on the begin of the item */
  icon: oneOfType([node, func]),
  /** if provided displays a button below the item text. It accepts all button
   * element props */
  buttonProps: shape({}),
  /** if provided makes the item clickable */
  onClick: func,
};

ListItem.defaultProps = {
  icon: undefined,
  buttonProps: {},
  onClick: undefined,
};

export { List, ListItem };
