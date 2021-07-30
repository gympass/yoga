import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Box } from '@gympass/yoga';
import { media } from '@gympass/yoga-helpers';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;

  ${media.max('sm')`
    flex-direction: column;
  `}
`;

const Content = props => (
  <Box display="flex" flexDirection="column" pv="xxsmall" {...props} />
);

const ThemeProp = props => (
  <Box as="ThemeProp" fs="small" pv="xxsmall" {...props} />
);

const Border = props => (
  <Box w={20} h={20} bColor="secondary" bt="medium" bl="medium" {...props} />
);

const Shape = ({ theme }) => (
  <Wrapper>
    <Content>
      <Border btlr="sharp" />
      <ThemeProp>Sharp</ThemeProp>
      <ThemeProp fw="bold">radii.sharp</ThemeProp>
      <ThemeProp>
        value: <strong> {theme.yoga.radii.sharp} </strong>
      </ThemeProp>
    </Content>
    <Content>
      <Border btlr="xsmall" />
      <ThemeProp>Xsmall</ThemeProp>
      <ThemeProp fw="bold">radii.xsmall</ThemeProp>
      <ThemeProp>
        value: <strong> {theme.yoga.radii.xsmall} </strong>
      </ThemeProp>
    </Content>
    <Content>
      <Border btlr="small" />
      <ThemeProp>Small</ThemeProp>
      <ThemeProp fw="bold">radii.small</ThemeProp>
      <ThemeProp>
        value: <strong> {theme.yoga.radii.small} </strong>
      </ThemeProp>
    </Content>
    <Content>
      <Border btlr="regular" />
      <ThemeProp>Regular</ThemeProp>
      <ThemeProp fw="bold">radii.regular</ThemeProp>
      <ThemeProp>
        value: <strong> {theme.yoga.radii.regular} </strong>
      </ThemeProp>
    </Content>
    <Content>
      <Border btlr="circle" />
      <ThemeProp>Circle</ThemeProp>
      <ThemeProp fw="bold">radii.circle</ThemeProp>
      <ThemeProp>
        value: <strong> {theme.yoga.radii.circle} </strong>
      </ThemeProp>
    </Content>
  </Wrapper>
);

export default withTheme(Shape);
