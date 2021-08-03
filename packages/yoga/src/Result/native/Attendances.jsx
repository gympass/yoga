import React from 'react';
import styled, { withTheme } from 'styled-components';
import { arrayOf, func, shape, string } from 'prop-types';
import Icon from '../../Icon';
import Text from '../../Text';
import Rate from './Rate';

const List = styled.Text`
  max-width: 220px;
`;

const IconBox = styled.View`
  display: flex;
  align-items: center;
  padding-left: 4px;
  padding-right: 4px;
  position: relative;
  margin-bottom: -1px;
`;
const Attendances = ({ attendances, rate }) => (
  <>
    <List numberOfLines={1} size="xsmall">
      {attendances &&
        attendances.map(({ description, icon }) => (
          <>
            <IconBox>
              <Icon as={icon} fill="medium" />
            </IconBox>
            <Text.Regular size="xsmall">{description}</Text.Regular>
          </>
        ))}
    </List>
    {rate && <Rate rate={rate} />}
  </>
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

export default withTheme(Attendances);
