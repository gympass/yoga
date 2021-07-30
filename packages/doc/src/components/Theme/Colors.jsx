import React from 'react';
import styled from 'styled-components';
import { Box } from '@gympass/yoga';
import { media } from '@gympass/yoga-helpers';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 30px 0;

  ${media.max('sm')`
    grid-template-columns: 1fr;
  `}
`;

const ColorBox = props => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    h={100}
    p="xxxsmall"
    bRadius="small"
    fs="small"
    {...props}
  />
);

const ColorProp = props => (
  <Box
    as="span"
    width="fit-content"
    bgColor="rgba(255, 255, 255, 0.4)"
    p="xxxsmall"
    bRadius="xsmall"
    color="text.primary"
    {...props}
  />
);

const Colors = () => (
  <Wrapper>
    <ColorBox bgColor="primary">
      <ColorProp>primary</ColorProp>
      <ColorProp>#D8385E</ColorProp>
    </ColorBox>
    <ColorBox bgColor="secondary">
      <ColorProp>secondary</ColorProp>
      <ColorProp>#231B22</ColorProp>
    </ColorBox>
    <ColorBox bgColor="feedback.success.light">
      <ColorProp> feedback.success.light </ColorProp>
      <ColorProp> feedback.success[0] </ColorProp>
      <ColorProp> #C1EEDB </ColorProp>
    </ColorBox>
    <ColorBox bgColor="feedback.success.dark">
      <ColorProp> feedback.success.dark </ColorProp>
      <ColorProp> feedback.success[1] </ColorProp>
      <ColorProp> #1D856C </ColorProp>
    </ColorBox>
    <ColorBox bgColor="feedback.informative.light">
      <ColorProp> feedback.informative.light </ColorProp>
      <ColorProp> feedback.informative[0] </ColorProp>
      <ColorProp> #E0DFFF </ColorProp>
    </ColorBox>
    <ColorBox bgColor="feedback.informative.dark">
      <ColorProp> feedback.informative.dark </ColorProp>
      <ColorProp> feedback.informative[1] </ColorProp>
      <ColorProp> #7068D4 </ColorProp>
    </ColorBox>
    <ColorBox bgColor="feedback.attention.light">
      <ColorProp> feedback.attention.light </ColorProp>
      <ColorProp> feedback.attention[0] </ColorProp>
      <ColorProp> #FCD6C3 </ColorProp>
    </ColorBox>
    <ColorBox bgColor="feedback.attention.dark">
      <ColorProp> feedback.attention.dark </ColorProp>
      <ColorProp> feedback.attention[1] </ColorProp>
      <ColorProp> #FF874C </ColorProp>
    </ColorBox>
    <ColorBox bgColor="text.primary">
      <ColorProp>text.primary</ColorProp>
      <ColorProp>#231B22</ColorProp>
    </ColorBox>
    <ColorBox bgColor="text.secondary">
      <ColorProp>text.secondary</ColorProp>
      <ColorProp> #6B6B78 </ColorProp>
    </ColorBox>
    <ColorBox bgColor="text.disabled">
      <ColorProp>text.disabled</ColorProp>
      <ColorProp> #D7D7E0 </ColorProp>
    </ColorBox>
    <ColorBox bgColor="elements.selectionAndIcons">
      <ColorProp>elements.selectionAndIcons</ColorProp>
      <ColorProp> #9898A6 </ColorProp>
    </ColorBox>
    <ColorBox bgColor="elements.lineAndBorders">
      <ColorProp>elements.lineAndBorders</ColorProp>
      <ColorProp> #D7D7E0 </ColorProp>
    </ColorBox>
    <ColorBox bgColor="elements.backgroundAndDisabled">
      <ColorProp>elements.backgroundAndDisabled</ColorProp>
      <ColorProp> #F5F5FA </ColorProp>
    </ColorBox>
  </Wrapper>
);

export default Colors;
