const webTemplate = name => {
  const lowerCasedName = name.toLowerCase();

  return {
    index: `---
title: '${name}'
metaTitle: '${name}'
metaDescription: '${name} Component'
---

import ${name}Web from './${lowerCasedName}-web.mdx';
import ${name}Native from './${lowerCasedName}-native.mdx';

# ${name}

<TabbedView>
  <Tab title="Web">
    <${name}Web />
  </Tab>

  <Tab title="Native">
    <${name}Native />
  </Tab>
</TabbedView>
  `,
    web: `### Reference

Gympass \`<${name} />\` description

### Usage

\`\`\`javascript reactLive=true
  <${name}>${name}</${name}>
\`\`\`

### Props

<PropsTable component="${name}" platform="web" />
`,
    native: `### Reference

Gympass ${name} description

### Usage

<ExpoSnack id="@gympass/yoga-${lowerCasedName}" theme="light" />

### Props

<PropsTable component="${name}" platform="native" />`,
  };
};

const nativeTemplate = name => `import React from 'react';
import { View } from 'react-native';
import { ${name} } from '@gympass/yoga';

const ${name}Page = () => (
  <View>
    <${name}>${name}</${name}>
  </View>
);

export default ${name}Page;
`;

module.exports = { webTemplate, nativeTemplate };
