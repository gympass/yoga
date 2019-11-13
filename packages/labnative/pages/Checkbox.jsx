import React, { useState } from 'react';
import { View } from 'react-native';
import { Checkbox } from '@gympass/yoga';
import styled from 'styled-components';

const StyledText = styled.Text`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
`;

const SwitchWrapper = styled.View`
  margin-bottom: 10px;
  text-align: center;
  align-items: center;
`;

const CheckboxPage = () => {
  const [checked, setChecked] = useState(true);
  return (
    <View
      style={{
        paddingBottom: 40,
      }}
    >
      <StyledText>Disabled</StyledText>
      <SwitchWrapper>
        <Checkbox disabled />
      </SwitchWrapper>
      <StyledText>Unchecked</StyledText>
      <SwitchWrapper>
        <Checkbox checked={false} />
      </SwitchWrapper>
      <StyledText>Checked</StyledText>
      <SwitchWrapper>
        <Checkbox checked />
      </SwitchWrapper>
      <StyledText>Working</StyledText>
      <SwitchWrapper>
        <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
      </SwitchWrapper>
    </View>
  );
};

export default CheckboxPage;
