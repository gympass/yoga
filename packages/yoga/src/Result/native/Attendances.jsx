import React from 'react';
import styled from 'styled-components';
import { arrayOf, func, shape, string } from 'prop-types';
import Box from '../../Box';
import Icon from '../../Icon';
import Text from '../../Text';
import Rate from './Rate';

const List = styled(Text.Tiny).attrs({
  numberOfLines: 1,
})`
  flex: 1;
`;

const ItemSeparator = styled(Box).attrs({
  width: 'xxxsmall',
  height: 'zero',
})``;

const Attendances = ({ attendances, rate }) => (
  <Box
    display="flex"
    width="100%"
    alignItems="center"
    justifyContent="center"
    flexDirection="row"
  >
    <List>
      {attendances.map(({ description, icon }) => (
        <React.Fragment key={description}>
          <Box height="xsmall" width="xsmall">
            <Icon
              as={icon}
              fill="deep"
              size="xsmall"
              style={{ marginTop: 2 }}
            />
          </Box>
          <ItemSeparator />
          {description}
          <ItemSeparator />
        </React.Fragment>
      ))}
    </List>
    {rate && <Rate rate={rate} />}
  </Box>
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
