import React, { useState } from 'react';
import {
  View,
  Image,
  Picker,
  Platform,
  TouchableWithoutFeedback,
  Text,
  ActionSheetIOS,
} from 'react-native';
import { ThemeProvider } from '@gympass/yoga';
import { ThemeConsumer } from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';
import paletteIcon from '../assets/images/palette_icon.png';

const themeChoices = [
  {
    value: 'endUser',
    label: 'End User',
  },
  {
    value: 'corp',
    label: 'Corp',
  },
  {
    value: 'gyms',
    label: 'Gyms',
  },
];

const CenteredView = props => {
  const [themed, setThemed] = useState(themeChoices[0]);

  return (
    <ThemeProvider theme={themed.value}>
      <ThemeConsumer>
        {theme => (
          <>
            <View
              style={{
                height: 50,
                backgroundColor: hexToRgb(theme.colors.gray[1]),
              }}
            >
              {Platform.OS === 'ios' ? (
                <TouchableWithoutFeedback
                  style={{
                    height: 50,
                    width: '100%',
                  }}
                  onPress={() =>
                    ActionSheetIOS.showActionSheetWithOptions(
                      {
                        options: themeChoices.map(t => t.label),
                      },
                      buttonIndex => {
                        setThemed(themeChoices[buttonIndex]);
                      },
                    )
                  }
                >
                  <View
                    style={{
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      padding: 20,
                    }}
                  >
                    <Text style={{}}>{themed.label}</Text>
                    <Image
                      source={paletteIcon}
                      style={{ width: 25, height: 25, marginLeft: 12 }}
                    />
                  </View>
                </TouchableWithoutFeedback>
              ) : (
                <Picker
                  selectedValue={themed}
                  style={{ width: '100%' }}
                  onValueChange={theme => setThemed(theme)}
                >
                  <Picker.Item label="End User" value="endUser" />
                  <Picker.Item label="Corp" value="corp" />
                  <Picker.Item label="Gyms" value="gyms" />
                </Picker>
              )}
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
