import React, { isValidElement } from 'react';
import styled, { withTheme } from 'styled-components';
import { TouchableWithoutFeedback } from 'react-native';
import { string, node, shape, oneOfType, func } from 'prop-types';
import get from 'lodash.get';

import Text from '../../../Text';
import Icon from '../../../Icon';
import theme from '../../../Theme/helpers/themeReader';

const { plan } = theme.components.card;

const List = styled.View`
  margin-top: ${plan.list.margin.top}px;
`;

const Item = styled.View`
  margin-bottom: ${plan.list.item.margin.bottom}px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const IconWrapper = styled.View`
  margin-right: ${plan.list.item.icon.margin.right}px;
`;

const Button = styled.View`
  margin-top: ${plan.list.button.margin.top}px;
`;

const ButtonText = styled(Text.Medium)`
  font-size: ${plan.list.button.font.size}px;
  color: ${plan.list.button.font.color};
`;

const ItemText = styled(Text.Small)`
  color: ${({ color }) => color || plan.list.item.font.color};
`;

const ListItem = withTheme(
  ({
    text,
    variant,
    theme: yogaTheme,
    icon,
    buttonProps: { children, ...buttonProps },
  }) => {
    const itemColor = get(yogaTheme.yoga.colors, variant);

    return (
      <Item>
        <Wrapper>
          {icon && (
            <IconWrapper>
              {isValidElement(icon) ? (
                icon
              ) : (
                <Icon as={icon} size="small" fill={variant} />
              )}
            </IconWrapper>
          )}
          <ItemText color={itemColor}>{text}</ItemText>
        </Wrapper>
        {Boolean(Object.keys(buttonProps).length) && (
          <TouchableWithoutFeedback {...buttonProps}>
            <Button>
              <ButtonText>{children}</ButtonText>
            </Button>
          </TouchableWithoutFeedback>
        )}
      </Item>
    );
  },
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
  variant: string,
};

ListItem.defaultProps = {
  icon: undefined,
  buttonProps: {},
  variant: undefined,
};

export { List, ListItem };
