import React from 'react';
import { number, string } from 'prop-types';
import styled from 'styled-components';

const Item = styled.a(
  ({
    theme: {
      yoga: {
        colors: { gray, dark },
      },
    },
  }) => `
  height: 284px;
  margin-right: 24px;
  padding: 24px;

  display: flex;
  flex-basis: 300px;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;

  background-color: ${gray[1]};
  color: ${dark};
  text-decoration: none;

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }

  @media (max-width: 900px) {
    flex-basis: 100%;
    margin: 9px 0;

    height: auto;
  }
`,
);

const Number = styled.span`
  font-size: 16px;
  font-weight: bold;

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;

const Content = styled.div`
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 0 16px;

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;

const Description = styled.p(
  ({
    theme: {
      yoga: {
        colors: { gray },
      },
    },
  }) => `
    margin: 0;

    color: ${gray[4]};
    font-size: 16px;

    @media (max-width: 900px) {
      font-size: 12px;
    }
  `,
);

const Box = ({ number: boxNumber, title, description, href }) => (
  <Item href={href}>
    <Number>{boxNumber}</Number>
    <Content>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Content>
  </Item>
);

Box.propTypes = {
  number,
  title: string,
  description: string,
  href: string,
};

Box.defaultProps = {
  number: 0,
  title: undefined,
  description: undefined,
  href: undefined,
};

export default Box;
