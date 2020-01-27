export default (type, imports, sample) =>
  type === 'web'
    ? `import React from 'react';
import ReactDOM from 'react-dom';
${'importsWithTheme'}

const App = () => <ThemeProvider>
${'component'}
</ThemeProvider>

ReactDOM.render(
  <App />,
  document.getElementById('root')
);`
    : `${imports}
import { View, StyleSheet } from 'react-native';

const App = () => (
  <ThemeProvider>
    <View style={styles.container}>
      ${sample}
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
