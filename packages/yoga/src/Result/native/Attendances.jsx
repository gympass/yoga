import React from 'react';
import styled from 'styled-components';
import { arrayOf, func, shape, string } from 'prop-types';
import Icon from '../../Icon';
import Text from '../../Text';
import Rate from './Rate';

const List = styled(Text.Regular)`
  max-width: 220px;
  text-align-vertical: center;
`;

const ItemSeparator = styled.View`
  background-color: #7bff66;
  ${({
    theme: {
      yoga: {
        spacing: { zero, xxxsmall },
      },
    },
  }) => {
    return `
      width: ${xxxsmall};
      height: ${zero};
    `;
  }}
`;

const IconWrapper = styled.View`
  height: 16px;
  width: 16px;
`;

const Attendances = ({ attendances, rate }) => (
  <>
    <List numberOfLines={1} size="xsmall">
      {attendances &&
        attendances.map(({ description, icon }) => (
          <>
            <IconWrapper>
              <Icon
                as={icon}
                fill="medium"
                width="16px"
                height="16px"
                style={{ marginTop: 2 }}
              />
            </IconWrapper>
            <ItemSeparator />
            {description}
            <ItemSeparator />
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

export default Attendances;
