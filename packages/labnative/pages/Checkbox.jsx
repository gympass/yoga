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

const CheckboxWrapper = styled.View`
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
      <CheckboxWrapper>
        <Checkbox disabled label="Checkbox Label" helper="Checkbox Helper" />
      </CheckboxWrapper>
      <StyledText>Unchecked</StyledText>
      <CheckboxWrapper>
        <Checkbox
          checked={false}
          label="Checkbox Label"
          helper="Checkbox Helper"
        />
      </CheckboxWrapper>
      <StyledText>Checked</StyledText>
      <CheckboxWrapper>
        <Checkbox checked label="Checkbox Label" helper="Checkbox Helper" />
      </CheckboxWrapper>
      <StyledText>Error</StyledText>
      <CheckboxWrapper>
        <Checkbox error label="Checkbox Label" helper="Checkbox Helper" />
      </CheckboxWrapper>
      <StyledText>Working</StyledText>
      <CheckboxWrapper>
        <Checkbox
          checked={checked}
          label="Checkbox Label"
          helper="Checkbox Helper"
          onChange={() => setChecked(!checked)}
        />
      </CheckboxWrapper>
    </View>
  );
};

export default CheckboxPage;
