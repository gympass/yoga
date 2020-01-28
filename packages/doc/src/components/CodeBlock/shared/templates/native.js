import injectImport from '..';

const native = (imports, code) => `import React from 'react';
import styled from 'styled-components';
${injectImport(imports, 'ThemeProvider')}
import { View, StyleSheet } from 'react-native';

const App = () => (
  <ThemeProvider>
    <View style={styles.container}>
      ${code}
    </View>
  </ThemeProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
});

export default App;`;

export default native;
