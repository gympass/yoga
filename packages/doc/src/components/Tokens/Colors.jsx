import React from 'react';
import styled from 'styled-components';
import { arrayOf, oneOfType, shape, number, string, any } from 'prop-types';
import withToken from './withToken';

import Tag from './Tag';
import Wrapper from './Wrapper';

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
  ${({ color }) => `
    display: flex;
    justify-content: space-between;

    height: 80px;
    background-color: ${color};
  `};
`;

const SubColors = ({ token }) => {
  const valueType = typeof token.value;
  const values = valueType === 'string' ? [token.value] : token.value;
  return values.map((subcolor, index) => (
    <Color key={subcolor} color={subcolor}>
      <Tag light>
        {valueType === 'string' ? token.alias : `${token.alias}[${index}]`}
      </Tag>
      <Tag light>{subcolor}</Tag>
    </Color>
  ));
};

const Colors = ({ data, ...rest }) => (
  <Wrapper {...rest}>
    {data &&
      data.map(color => (
        <ColorPallete key={color.id}>
          <Title>{color.id}</Title>
          <SubColors token={color} />
        </ColorPallete>
      ))}
  </Wrapper>
);

Colors.propTypes = {
  data: arrayOf(
    shape({
      token: string,
      id: oneOfType([string, number]),
      key: string,
      alias: string,
      value: any,
    }),
  ).isRequired,
};

export default withToken(Colors);
