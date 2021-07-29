import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Box } from '@gympass/yoga';
import { media } from '@gympass/yoga-helpers';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  ${media.max('md')`
    justify-content: center;
  `}
`;

const BorderBox = props => (
  <Box
    w={200}
    h={200}
    mv="xxsmall"
    mr="medium"
    p="xxsmall"
    d="flex"
    flexDirection="column"
    bgColor="white"
    borderColor="light"
    fs="xsmall"
    {...props}
  />
);
const ThemeBox = props => (
  <Box
    p="xxxsmall"
    mb="xxxsmall"
    bgColor="rgba(215, 215, 224, 0.4)"
    bRadius="xsmall"
    {...props}
  />
);

const Borders = ({ theme }) => (
  <Wrapper>
    <BorderBox b="zero">
      <ThemeBox>
        <strong>theme.</strong>borders.zero
        <br />
        <strong>theme.</strong>borders[0]
      </ThemeBox>
      <div>
        <strong>value: </strong> {theme.yoga.borders.zero}
      </div>
    </BorderBox>
    <BorderBox b="small">
      <ThemeBox>
        <strong>theme.</strong>borders.small
        <br />
        <strong>theme.</strong>borders[1]
      </ThemeBox>
      <div>
        <strong>value:</strong>
        {theme.yoga.borders.small}
      </div>
    </BorderBox>
    <BorderBox b="medium">
      <ThemeBox>
        <strong>theme.</strong>borders.medium
        <br />
        <strong>theme.</strong>borders[2]
      </ThemeBox>
      <div>
        <strong>value:</strong> {theme.yoga.borders.medium}
      </div>
    </BorderBox>
  </Wrapper>
);

export default withTheme(Borders);
