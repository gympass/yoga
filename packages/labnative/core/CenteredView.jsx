import React, { useState } from 'react';
import { View, Picker, Platform, StyleSheet } from 'react-native';
import { ThemeProvider } from '@gympass/yoga';
import { ThemeConsumer } from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';

const CenteredView = props => {
  const [themed, setThemed] = useState('endUser');
  return (
    <ThemeProvider theme={themed}>
      <ThemeConsumer>
        {theme => (
          <>
            <View
              style={{
                height: Platform.OS === 'ios' ? 200 : 50,
                backgroundColor: hexToRgb(theme.colors.gray[1]),
              }}
            >
              <Picker
                selectedValue={themed}
                style={{ width: '100%' }}
                onValueChange={theme => setThemed(theme)}
              >
                <Picker.Item label="End User" value="endUser" />
                <Picker.Item label="Corp" value="corp" />
                <Picker.Item label="Gyms" value="gyms" />
              </Picker>
            </View>
            <View
              style={{
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
                backgroundColor: hexToRgb(theme.colors.gray[1]),
              }}
              {...props}
            />
          </>
        )}
      </ThemeConsumer>
    </ThemeProvider>
  );
};

export default CenteredView;
