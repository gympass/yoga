import React from 'react';
import { AppRegistry, View } from 'react-native';
import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native';
import { ThemeProvider } from '@gympass/yoga';

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

const CenteredView = ({ children }) => <View style={style}>{children}</View>;

addDecorator(storyFn => (
  <ThemeProvider>
    <CenteredView>{storyFn()}</CenteredView>
  </ThemeProvider>
));

const loadStories = () => [require('./stories/button.js')];

configure(loadStories, module);

const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent('labnative', () => StorybookUIRoot);

export default StorybookUIRoot;
