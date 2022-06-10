import { injectImport } from '..';

const native = (imports, code) => `import React from 'react';
import styled from 'styled-components';
${injectImport(
  imports,
  ['ThemeProvider, FontLoader', 'View, StyleSheet'],
  ['@gympass/yoga', 'react-native'],
)}

const App = () => (
  <ThemeProvider>
    <FontLoader />
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
    backgroundColor: '#fff',
  },
});

export default App;`;

export default native;
