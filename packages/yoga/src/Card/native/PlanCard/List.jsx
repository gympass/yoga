import React from 'react';
import styled, { css, withTheme } from 'styled-components';
import { View, TouchableWithoutFeedback } from 'react-native';
import { string, node, shape, oneOfType, func } from 'prop-types';

import Text from '../../../Text';
import theme from '../../../Theme/helpers/themeReader';

const List = styled.View`
  margin-top: ${theme.components.card.plan.list.margin.top}px;
`;

const Item = styled.View`
  margin-bottom: ${theme.components.card.plan.list.item.margin.bottom}px;
`;

const ItemText = styled(Text.Small)`
  ${props => {
    const {
      components: {
        card: { plan },
      },
    } = theme(props);

    return css`
      font-size: ${plan.list.item.font.size}px;
      color: ${plan.list.item.font.color};
    `;
  }}
`;

const Button = styled.View`
  margin-top: ${theme.components.card.plan.list.button.margin.top}px;
`;

const ButtonText = styled(Text.Medium)`
  ${props => {
    const {
      components: {
        card: { plan },
      },
    } = theme(props);

    return css`
      font-size: ${plan.list.button.font.size}px;
      color: ${plan.list.button.font.color};
    `;
  }}
`;

const ListItem = withTheme(
  ({
    text,
    icon: Icon,
    buttonProps: { children, ...buttonProps },
    theme: yogaTheme,
  }) => (
    <Item>
      <View style={{ flexDirection: 'row' }}>
        {Icon && (
          <Icon
            width={16}
            height={16}
            style={{
              marginRight:
                yogaTheme.yoga.components.card.plan.list.item.icon.margin.right,
            }}
          />
        )}
        <ItemText>{text}</ItemText>
      </View>
      {Boolean(Object.keys(buttonProps).length) && (
        <TouchableWithoutFeedback {...buttonProps}>
          <Button>
            <ButtonText>{children}</ButtonText>
          </Button>
        </TouchableWithoutFeedback>
      )}
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
