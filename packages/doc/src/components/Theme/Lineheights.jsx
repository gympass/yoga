import React from 'react';
import { withTheme } from 'styled-components';

import { Wrapper, Content, TextBox } from './FontWeights';

const LHBox = (props) => (
  <TextBox bgColor="rgba(215, 215, 224, 0.4)" {...props} />
);

const LineHeights = ({ theme }) => (
  <Wrapper style={{ gridGap: theme.yoga.spacing.xsmall }}>
    <Content>
      <TextBox> xxsmall </TextBox>
      <LHBox lh="xxsmall">{theme.yoga.lineHeights.xxsmall}</LHBox>
    </Content>
    <Content>
      <TextBox> xsmall </TextBox>
      <LHBox lh="xsmall"> {theme.yoga.lineHeights.xsmall} </LHBox>
    </Content>
    <Content>
      <TextBox> small </TextBox>
      <LHBox lh="small"> {theme.yoga.lineHeights.small} </LHBox>
    </Content>
    <Content>
      <TextBox> medium </TextBox>
      <LHBox lh="medium"> {theme.yoga.lineHeights.medium} </LHBox>
    </Content>
    <Content>
      <TextBox> large </TextBox>
      <LHBox lh="large"> {theme.yoga.lineHeights.large} </LHBox>
    </Content>
    <Content>
      <TextBox> xlarge </TextBox>
      <LHBox lh="xlarge"> {theme.yoga.lineHeights.xlarge} </LHBox>
    </Content>
    <Content>
      <TextBox> xxlarge </TextBox>
      <LHBox lh="xxlarge"> {theme.yoga.lineHeights.xxlarge} </LHBox>
    </Content>
    <Content>
      <TextBox> xxxlarge </TextBox>
      <LHBox lh="xxxlarge"> {theme.yoga.lineHeights.xxxlarge} </LHBox>
    </Content>
    <Content>
      <TextBox> huge </TextBox>
      <LHBox lh="huge"> {theme.yoga.lineHeights.huge} </LHBox>
    </Content>
  </Wrapper>
);

export default withTheme(LineHeights);
