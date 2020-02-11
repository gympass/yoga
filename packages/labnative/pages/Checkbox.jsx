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
        <Checkbox error label="Checkbox Label" helper="Checkbox Helper" />
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
    </View>
  );
};

export default CheckboxPage;
