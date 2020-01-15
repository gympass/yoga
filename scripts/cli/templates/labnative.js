const labNative = name => `import React from 'react';
import { View } from 'react-native';
import { ${name} } from '@gympass/yoga';

const ${name}Page = () => (
  <View>
    <${name}>${name}</${name}>
  </View>
);

export default ${name}Page;
`;

module.exports = labNative;
