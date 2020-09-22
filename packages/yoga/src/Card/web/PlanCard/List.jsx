import React from 'react';
import styled, { css } from 'styled-components';
import { string, node, shape, oneOfType, func } from 'prop-types';

import Text from '../../../Text';
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
  ${truncateStyle}

  ${props => {
    const {
      components: {
        card: { plan },
      },
    } = theme(props);

    return css`
      margin-bottom: ${plan.list.item.margin.bottom}px;

      svg {
        vertical-align: middle;
        margin-right: ${plan.list.item.icon.margin.right}px;
      }
    `;
  }}
`;

const ItemText = styled(Text.Small)`
  display: inline-block;
  height: 16px;
  vertical-align: middle;

  color: ${theme.components.card.plan.list.item.font.color};
`;

const Button = styled.button`
  display: block;
  padding: 0;

  letter-spacing: normal;

  background-color: transparent;
  border: none;

  cursor: pointer;
  text-decoration: none;

  ${truncateStyle}

  ${props => {
    const {
      components: {
        card: { plan },
      },
    } = theme(props);

    return css`
      margin-top: ${plan.list.button.margin.top}px;

      font-family: ${theme.baseFont.family};
      font-size: ${plan.list.button.font.size}px;
      font-weight: ${plan.list.button.font.weight};
      color: ${plan.list.button.font.color};
    `;
  }}
`;

const ListItem = ({ text, icon: Icon, buttonProps }) => (
  <Item>
    {Icon && <Icon fill="#9898A6" width={16} height={16} />}
    <ItemText as="span">{text}</ItemText>
    {Object.keys(buttonProps).length && <Button {...buttonProps} />}
  </Item>
);

List.displayName = 'PlanCard.List';
ListItem.displayName = 'PlanCard.ListItem';
Button.displayName = 'PlanCard.ListButton';

ListItem.propTypes = {
  text: string.isRequired,
  /** an icon to be displayed on the begin of the item */
  icon: oneOfType([node, func]),
  /** if provided displays a button below the item text. It accepts all button
   * element props */
  buttonProps: shape({}),
};

ListItem.defaultProps = {
  icon: undefined,
  buttonProps: {},
};

export { List, ListItem };
