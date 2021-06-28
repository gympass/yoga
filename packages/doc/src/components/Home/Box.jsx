import React from 'react';
import { number, string } from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Item = styled(Link)(
  ({
    theme: {
      yoga: {
        colors: { elements, text },
      },
    },
  }) => `
  display: flex;
  flex-basis: 300px;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;

  height: 284px;
  margin-right: 24px;
  padding: 24px;

  background-color: ${elements.backgroundAndDisabled};
  color: ${text.primary};

  text-decoration: none;

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }

  @media (max-width: 900px) {
    flex-basis: 100%;

    height: auto;

    margin: 9px 0;
    padding: 14px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin: 0 0 16px;

  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 900px) {
    font-size: 14px;
    margin-bottom: 12px;
  }
`;

const Description = styled.p(
  ({
    theme: {
      yoga: {
        colors: { text },
      },
    },
  }) => `
    margin: 0;

    color: ${text.secondary};
    font-size: 16px;

    @media (max-width: 900px) {
      font-size: 12px;
    }
  `,
);

const Box = ({ number: boxNumber, title, description, href }) => (
  <Item to={href}>
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
