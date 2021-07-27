import React from 'react';
import styled from 'styled-components';
import { arrayOf, func, shape, string } from 'prop-types';
import Icon from '../../Icon';
import Text from '../../Text';
import Rate from './Rate';

const Content = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Description = styled(Text.Regular)`
  ${({
    theme: {
      yoga: {
        lineHeights: { xsmall },
        spacing: { xxxsmall },
      },
    },
  }) => {
    return `
      line-height:${xsmall};
      margin-left:${xxxsmall};
    `;
  }}
`;

const Item = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({
    theme: {
      yoga: {
        spacing: { xxxsmall },
      },
    },
  }) => {
    return `
      margin-right:${xxxsmall};
    `;
  }}
`;

const List = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Attendances = ({ attendances, rate }) => (
  <Content>
    <List>
      {attendances &&
        attendances.map(({ description, icon }) => (
          <Item>
            <Icon as={icon} width="xsmall" height="xsmall" fill="medium" />
            <Description numberOfLines={1} number size="xsmall">
              {description}
            </Description>
          </Item>
        ))}
    </List>
    {rate && <Rate rate={rate} />}
  </Content>
);

Attendances.propTypes = {
  attendances: arrayOf(
    shape({
      description: string,
      icon: func,
    }),
  ).isRequired,
  rate: string,
};

Attendances.defaultProps = {
  rate: undefined,
};

export default Attendances;
