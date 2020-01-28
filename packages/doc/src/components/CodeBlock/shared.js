const injectImport = (imports, component) => {
  const index = imports.indexOf(` } from '@gympass/yoga'`);
  const importsWithComponent = [
    imports.slice(0, index),
    `, ${component}`,
    imports.slice(index),
  ].join('');

  return importsWithComponent;
};

const getTemplate = (type, imports, code) => {
  const COMMON_DEFAULT_IMPORTS = `import React from 'react';`;

  const WEB_DEFAULT_IMPORTS = `${COMMON_DEFAULT_IMPORTS};
import ReactDOM from 'react-dom';`;

  const NATIVE_DEFAULT_IMPORTS = `${COMMON_DEFAULT_IMPORTS};
import styled from 'styled-components';`;

  return type === 'web'
    ? `${WEB_DEFAULT_IMPORTS}
${injectImport(imports, 'ThemeProvider')}

const App = () => <ThemeProvider>
${code}
</ThemeProvider>

ReactDOM.render(
  <App />,
  document.getElementById('root')
);`
    : `${NATIVE_DEFAULT_IMPORTS}
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
};

export { getTemplate, injectImport };
