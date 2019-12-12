import React from 'react';
import styled from 'styled-components';
import { string, arrayOf, any, shape } from 'prop-types';
import { hexToRgb } from '@gympass/yoga-common';
import withToken from './withToken';

const CardsWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  width: 100%;
`;

const Card = styled.div`
  ${({
    property,
    value,
    valueUnit,
    theme: {
      yoga: {
        colors: { gray: grayPallete, white, dark },
      },
    },
  }) => `
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    width: 200px;
    height: 200px;
    margin: 10px 20px 10px 0;
    padding: 8px;

    background: ${white};
    border: 1px solid ${hexToRgb(grayPallete[2], 0.7)};
    ${property}: ${valueUnit ? `${value}${valueUnit}` : value};

    span {
      width: fit-content;
      height: fit-content;
      margin: 5px;
      padding: 5px;

      background: ${hexToRgb(grayPallete[2], 0.4)};
      border-radius: 4px;

      font-size: 12px;
      color: ${dark};
    }
  `};
`;

const Cards = ({ data, example }) => (
  <CardsWrapper>
    {data &&
      data.map(token => (
        <Card
          key={token.alias}
          property={example.property}
          valueUnit={example.valueUnit}
          value={token.value}
        >
          <span>{token.name}</span>
          <span>{token.value}</span>
        </Card>
      ))}
  </CardsWrapper>
);

Cards.propTypes = {
  data: arrayOf(any).isRequired,
  example: shape({
    property: string,
    valueUnit: string,
  }).isRequired,
};

export default withToken(Cards);
