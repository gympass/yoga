import { arrayOf, func, shape, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Box from '../../Box';
import Text from '../../Text';
import Rate from './Rate';
import TinyTextIcon from './TinyTextIcon';

const List = styled(Text.Caption).attrs({
  numberOfLines: 1,
  color: ({ color }) => color || 'deep',
})`
  flex: 1;
`;

const ItemSeparator = styled(Box).attrs({
  height: 'zero',
})``;

const Attendances = ({ attendances, rate, color }) => (
  <Box
    display="flex"
    width="100%"
    alignItems="center"
    justifyContent="center"
    flexDirection="row"
    mb="xxxsmall"
  >
    <List color={color}>
      {attendances.map(({ description, icon }) => (
        <React.Fragment key={description}>
          <TinyTextIcon as={icon} marginTop="2px" fill={color || 'deep'} />
          <ItemSeparator w="xxxsmall" />
          {description}
          <ItemSeparator w="xxsmall" />
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
  color: string,
};

Attendances.defaultProps = {
  rate: undefined,
  color: 'deep',
};

export default Attendances;
