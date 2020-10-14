import React from 'react';
import styled, { css, withTheme } from 'styled-components';
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

const Wrapper = styled.div`
  display: flex;
  min-width: 0;

  svg {
    flex-shrink: 0;
  }
`;

const ItemText = styled(Text.Small)`
  display: inline-block;
  height: 100%;
  vertical-align: middle;

  ${truncateStyle}

  color: ${theme.components.card.plan.list.item.font.color};
`;

const Button = styled.button`
  display: block;
  padding: 0;

  width: 100%;

  letter-spacing: normal;

  background-color: transparent;
  border: none;

  cursor: pointer;
  text-decoration: none;
  text-align: left;
  outline: none;

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

const ListItem = withTheme(
  ({ text, icon: Icon, buttonProps, theme: yogaTheme }) => (
    <Item>
      <Wrapper>
        {Icon && (
          <Icon
            fill={yogaTheme.yoga.colors.elements.selectionAndIcons}
            width={16}
            height={16}
          />
        )}
        <ItemText as="span">{text}</ItemText>
      </Wrapper>
      {Object.keys(buttonProps).length && <Button {...buttonProps} />}
    </Item>
  ),
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
