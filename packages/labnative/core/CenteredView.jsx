import React, { useState } from 'react';
import { View, Picker, Platform, StyleSheet } from 'react-native';
import { ThemeProvider } from '@gympass/design-system';

const CenteredView = props => {
  const [themed, setThemed] = useState('endUser');
  return (
    <ThemeProvider theme={themed}>
      <View
        style={{
          height: Platform.OS === 'ios' ? 200 : 20,
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
      <View style={styles.MainContainer} {...props} />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CenteredView;
