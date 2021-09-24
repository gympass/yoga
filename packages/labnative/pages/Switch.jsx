import React, { useState } from 'react';
import { View } from 'react-native';
import { Checkbox } from '@gympass/yoga';
import styled from 'styled-components';

import { DocTitle } from '../components';

const SwitchWrapper = styled.View`
  margin-bottom: 10px;
  text-align: center;
  align-items: center;
`;

const SwitchPage = () => {
  const [checked, setChecked] = useState(true);

  return (
    <View
      style={{
        paddingBottom: 40,
      }}
    >
      <DocTitle>Disabled</DocTitle>
      <SwitchWrapper>
        <Checkbox.Switch disabled />
      </SwitchWrapper>
      <DocTitle>Unchecked</DocTitle>
      <SwitchWrapper>
        <Checkbox.Switch checked={false} />
      </SwitchWrapper>
      <DocTitle>Checked</DocTitle>
      <SwitchWrapper>
        <Checkbox.Switch checked />
      </SwitchWrapper>
      <DocTitle>Working</DocTitle>
      <SwitchWrapper>
        <Checkbox.Switch
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </SwitchWrapper>
    </View>
  );
};

export default SwitchPage;
