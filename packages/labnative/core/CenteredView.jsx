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
                    <Text>{themed.label}</Text>
                    <Image
                      source={paletteIcon}
                      style={{ width: 25, height: 25, marginLeft: 12 }}
                    />
                  </View>
                </TouchableWithoutFeedback>
              ) : (
                <Picker
                  selectedValue={themed.label}
                  style={{ width: '100%' }}
                  onValueChange={theme => {
                    setThemed(
                      themeChoices[
                        themeChoices.findIndex(t => t.value === theme)
                      ],
                    );
                  }}
                >
                  {themeChoices.map(({ label, value }) => (
                    <Picker.Item label={label} value={value} key={value} />
                  ))}
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
