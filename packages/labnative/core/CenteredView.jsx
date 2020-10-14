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
import { ThemeConsumer } from 'styled-components';

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
  const [darkMode, setDarkMode] = useState('#FFF');

  return (
    <ThemeProvider>
      <>
        <View
          style={{
            height: 60,
            backgroundColor: darkMode,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}
        >
          <ThemeConsumer>
            {theme => (
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
              >
                <Text
                  style={{
                    color: darkMode === '#FFF' ? '#41414A' : '#FFF',
                    marginRight: 8,
                  }}
                >
                  Dark Mode
                </Text>

                <Switch
                  onChange={() => {
                    setDarkMode(darkMode === '#FFF' ? '#41414A' : '#FFF');
                  }}
                  value={darkMode === '#41414A'}
                  trackColor={{ true: theme.yoga.colors.primary }}
                />
              </View>
            )}
          </ThemeConsumer>
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
