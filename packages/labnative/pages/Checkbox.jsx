import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Checkbox } from '@gympass/yoga';
import styled from 'styled-components';

import { DocTitle } from '../components';

const CheckboxWrapper = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 10px;

  text-align: center;
`;

const CheckboxPage = () => {
  const [checked, setChecked] = useState(true);
  const [checkInverted, setCheckInverted] = useState(true);

  return (
    <ScrollView
      style={{
        paddingBottom: 40,
      }}
    >
      <DocTitle>Disabled</DocTitle>
      <CheckboxWrapper>
        <Checkbox
          disabled
          style={{ marginRight: 4 }}
          label="Default Label"
          helper="Default Helper"
        />
        <Checkbox
          disabled
          inverted
          label="Inverted Label"
          helper="Inverted Helper"
        />
      </CheckboxWrapper>
      <DocTitle>Unchecked</DocTitle>
      <CheckboxWrapper>
        <Checkbox
          checked={false}
          style={{ marginRight: 4 }}
          label="Default Label"
          helper="Default Helper"
        />
        <Checkbox
          checked={false}
          inverted
          label="Inverted Label"
          helper="Inverted Helper"
        />
      </CheckboxWrapper>
      <DocTitle>Checked</DocTitle>
      <CheckboxWrapper>
        <Checkbox
          checked
          style={{ marginRight: 4 }}
          label="Default Label"
          helper="Default Helper"
        />
        <Checkbox
          checked
          inverted
          style={{ marginRight: 4 }}
          label="Inverted Label"
          helper="Inverted Helper"
        />
      </CheckboxWrapper>
      <DocTitle>Error</DocTitle>
      <CheckboxWrapper>
        <Checkbox
          label="Default Label"
          helper="Default Helper"
          error="Error text"
        />
      </CheckboxWrapper>
      <DocTitle>Working</DocTitle>
      <CheckboxWrapper>
        <Checkbox
          checked={checked}
          label="Default Label"
          helper="Default Helper"
          onPress={() => setChecked(!checked)}
          style={{ marginRight: 4 }}
        />
        <Checkbox
          checked={checkInverted}
          label="Inverted"
          helper="Default Helper"
          onPress={() => setCheckInverted(!checkInverted)}
          inverted
        />
      </CheckboxWrapper>
    </ScrollView>
  );
};

export default CheckboxPage;
