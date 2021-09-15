import { arrayOf, func, shape, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Box from '../../Box';
import Text from '../../Text';
import Rate from './Rate';
import TinyTextIcon from './TinyTextIcon';

const List = styled(Text.Tiny).attrs({
  numberOfLines: 1,
  variant: 'deep',
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
          <TinyTextIcon as={icon} fill="deep" />
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
