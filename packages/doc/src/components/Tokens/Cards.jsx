import React from 'react';
import styled from 'styled-components';
import { arrayOf, oneOfType, shape, number, string } from 'prop-types';
import { hexToRgb } from '@gympass/yoga-common';
import withToken from './withToken';

import Tag from './Tag';
import Wrapper from './Wrapper';

const Card = styled.div`
  ${({
    property,
    value,
    valueUnit,
    theme: {
      yoga: {
        colors: { elements, white },
      },
    },
  }) => `
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    width: 200px;
    height: 200px;
    margin: 10px 20px 10px 0;
    padding: 8px;

    background: ${white};
    border: 1px solid ${hexToRgb(elements.lineAndBorders, 0.7)};
    ${property}: ${valueUnit ? `${value}${valueUnit}` : value};
  `};
`;

const Cards = ({ data, example }) => (
  <Wrapper>
    {data &&
      data.map((token) => (
        <Card
          key={token.id}
          property={example.property}
          valueUnit={example.valueUnit}
          value={token.value}
        >
          <Tag>
            <strong>token: </strong>
            {token.key}
          </Tag>
          <Tag>
            <strong>alias: </strong>
            {token.alias}
          </Tag>
          <Tag>
            <strong>value: </strong>
            {token.value}
          </Tag>
        </Card>
      ))}
  </Wrapper>
);

Cards.propTypes = {
  data: arrayOf(
    shape({
      token: string,
      id: oneOfType([string, number]),
      key: string,
      alias: string,
      value: oneOfType([string, number]),
    }),
  ).isRequired,
  example: shape({
    property: string,
    valueUnit: string,
  }).isRequired,
};

export default withToken(Cards);
