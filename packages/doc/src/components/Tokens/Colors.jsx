/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import { arrayOf, any } from 'prop-types';
import { hexToRgb } from '@gympass/yoga-common';
import withToken from './withToken';

const ColorsWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  width: 100%;
`;

const ColorPallete = styled.div`
  width: 300px;

  margin: 0 20px 40px 0;
`;

const Title = styled.span`
  display: block;
  padding: 10px 0;

  font-size: 16px;
  text-transform: uppercase;
`;

const Color = styled.div`
  ${({
    color,
    theme: {
      yoga: {
        colors: { white, dark },
      },
    },
  }) => `
    display: flex;
    justify-content: space-between;

    height: 80px;
    background-color: ${color};

    span {
      height: fit-content;
      margin: 5px;
      padding: 5px;
      
      background: ${hexToRgb(white, 0.4)};
      border-radius: 4px;

      font-size: 12px;
      color: ${dark};
    }
  `};
`;

const SubColors = ({ token }) => {
  const valueType = typeof token.value;
  const values = valueType === 'string' ? [token.value] : token.value;
  return values.map((subcolor, index) => (
    <Color key={index} color={subcolor}>
      <span>
        {valueType === 'string'
          ? `${token.token}.${token.alias}`
          : `${token.token}.${token.alias}[${index}]`}
      </span>
      <span>{subcolor}</span>
    </Color>
  ));
};

const Colors = ({ data, ...rest }) => (
  <ColorsWrapper {...rest}>
    {data &&
      data.map(color => (
        <ColorPallete key={color.alias}>
          <Title>{color.alias}</Title>
          <SubColors token={color} />
        </ColorPallete>
      ))}
  </ColorsWrapper>
);

Colors.propTypes = {
  data: arrayOf(any).isRequired,
};

export default withToken(Colors);
