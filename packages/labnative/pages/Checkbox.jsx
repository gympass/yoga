import React, { useState } from 'react';
import { View } from 'react-native';
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
  return (
    <View
      style={{
        paddingBottom: 40,
      }}
    >
      <DocTitle>Disabled</DocTitle>
      <CheckboxWrapper>
        <Checkbox disabled label="Checkbox Label" helper="Checkbox Helper" />
      </CheckboxWrapper>
      <DocTitle>Unchecked</DocTitle>
      <CheckboxWrapper>
        <Checkbox
          checked={false}
          label="Checkbox Label"
          helper="Checkbox Helper"
        />
      </CheckboxWrapper>
      <DocTitle>Checked</DocTitle>
      <CheckboxWrapper>
        <Checkbox checked label="Checkbox Label" helper="Checkbox Helper" />
      </CheckboxWrapper>
      <DocTitle>Error</DocTitle>
      <CheckboxWrapper>
        <Checkbox
          label="Checkbox Label"
          helper="Checkbox Helper"
          error="Error text"
        />
      </CheckboxWrapper>
      <DocTitle>Working</DocTitle>
      <CheckboxWrapper>
        <Checkbox
          checked={checked}
          label="Checkbox Label"
          helper="Checkbox Helper"
          onPress={() => setChecked(!checked)}
        />
      </CheckboxWrapper>
      <DocTitle>Variants</DocTitle>
      <CheckboxWrapper>
        <Checkbox
          checked
          variant="primary"
          label="Primary (default)"
          style={{ marginRight: 4 }}
        />
        <Checkbox
          checked
          variant="secondary"
          label="Seconary"
          style={{ marginRight: 4 }}
        />
        <Checkbox checked variant="tertiary" label="Tertiary" />
      </CheckboxWrapper>
    </View>
  );
};

export default CheckboxPage;
