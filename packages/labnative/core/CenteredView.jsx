import React, { useState } from 'react';
import {
  View,
  Image,
  Picker,
  Platform,
  TouchableWithoutFeedback,
  Text,
  ActionSheetIOS,
  Switch,
} from 'react-native';
import { ThemeProvider } from '@gympass/yoga';
import paletteIcon from '../assets/images/palette_icon.png';

const themeChoices = [
  {
    value: 'EndUser',
    label: 'End User',
  },
  {
    value: 'Corporate',
    label: 'Corporate',
  },
  {
    value: 'Gyms',
    label: 'Gyms',
  },
];

const CenteredView = props => {
  const [themed, setThemed] = useState(themeChoices[0]);
  const [darkMode, setDarkMode] = useState('#FFF');

  return (
    <ThemeProvider theme={themed.value}>
      <>
        <View
          style={{
            height: 60,
            backgroundColor: darkMode,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {Platform.OS === 'ios' ? (
            <TouchableWithoutFeedback
              style={{
                height: 50,
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
                <Image
                  source={paletteIcon}
                  style={{ width: 25, height: 25, marginRight: 12 }}
                />
                <Text
                  style={{
                    color: darkMode === '#FFF' ? '#41414A' : '#FFF',
                  }}
                >
                  {themed.label}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ) : (
            <Picker
              selectedValue={themed.label}
              style={{
                width: '40%',
                color: darkMode === '#FFF' ? '#41414A' : '#FFF',
              }}
              onValueChange={selectedTheme => {
                setThemed(
                  themeChoices[
                    themeChoices.findIndex(t => t.value === selectedTheme)
                  ],
                );
              }}
            >
              {themeChoices.map(({ label, value }) => (
                <Picker.Item label={label} value={value} key={value} />
              ))}
            </Picker>
          )}
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <Text
              style={{
                color: darkMode === '#FFF' ? '#41414A' : '#FFF',
              }}
            >
              Dark Mode
            </Text>

            <Switch
              onChange={() => {
                setDarkMode(darkMode === '#FFF' ? '#41414A' : '#FFF');
              }}
              value={darkMode === '#41414A'}
            />
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            backgroundColor: darkMode,
          }}
          {...props}
        />
      </>
    </ThemeProvider>
  );
};

export default CenteredView;
