import React from 'react';
import styled, { css } from 'styled-components';
import { string, node, shape, oneOfType, func } from 'prop-types';

import theme from '../../../Theme/helpers/themeReader';

const truncateStyle = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const List = styled.ul`
  margin: ${theme.components.card.plan.list.margin.top}px 0 0;
  padding: 0;

  list-style: none;
`;

const Item = styled.li`
  margin-bottom: ${theme.components.card.plan.list.item.margin.bottom}px;

  font-size: ${theme.components.card.plan.list.item.font.size}px;
  color: ${theme.components.card.plan.list.item.font.color};

  ${truncateStyle}

  svg {
    margin-right: ${theme.components.card.plan.list.item.icon.margin.right}px;
  }
`;

const Button = styled.button`
  display: block;
  margin-top: ${theme.components.card.plan.list.button.margin.top}px;
  padding: 0;

  font-family: ${theme.baseFont.family};
  font-size: ${theme.components.card.plan.list.button.font.size}px;
  font-weight: ${theme.components.card.plan.list.button.font.weight};
  letter-spacing: normal;
  color: ${theme.components.card.plan.list.button.font.color};

  background-color: transparent;
  border: none;

  cursor: pointer;
  text-decoration: none;

  ${truncateStyle}
`;

const ListItem = ({ text, icon: Icon, buttonProps }) => (
  <Item>
    {Icon && <Icon width={16} height={16} />}
    {text}
    {Object.keys(buttonProps).length && <Button {...buttonProps} />}
  </Item>
);

List.displayName = 'PlanCard.List';
Item.displayName = 'PlanCard.ListItem';
Button.displayName = 'PlanCard.ListButton';

ListItem.propTypes = {
  text: string.isRequired,
  icon: oneOfType([node, func]),
  buttonProps: shape({}),
};

ListItem.defaultProps = {
  icon: undefined,
  buttonProps: {},
};

export { List, ListItem };
