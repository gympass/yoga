import React from 'react';
import { withTheme } from 'styled-components';

import { Wrapper, BorderBox as ElementBox, ThemeBox } from './Borders';

const Elevations = ({ theme }) => (
  <Wrapper>
    <ElementBox elevation="zero">
      <ThemeBox>
        <strong>theme.</strong>elevations.zero
        <br />
        <strong>theme.</strong>elevations[0]
      </ThemeBox>
      <span>
        <strong>value: </strong> {theme.yoga.elevations.zero}
      </span>
    </ElementBox>
    <ElementBox elevation="small">
      <ThemeBox>
        <strong>theme.</strong>elevations.small
        <br />
        <strong>theme.</strong>elevations[1]
      </ThemeBox>
      <span>
        <strong>value: </strong> {theme.yoga.elevations.small}
      </span>
    </ElementBox>
    <ElementBox elevation="medium">
      <ThemeBox>
        <strong>theme.</strong>elevations.medium
        <br />
        <strong>theme.</strong>elevations[2]
      </ThemeBox>
      <span>
        <strong>value: </strong> {theme.yoga.elevations.medium}
      </span>
    </ElementBox>
    <ElementBox elevation="large">
      <ThemeBox>
        <strong>theme.</strong>elevations.large
        <br />
        <strong>theme.</strong>elevations[3]
      </ThemeBox>
      <span>
        <strong>value: </strong> {theme.yoga.elevations.large}
      </span>
    </ElementBox>
  </Wrapper>
);

export default withTheme(Elevations);
