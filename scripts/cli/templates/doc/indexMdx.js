const indexMdx = name => {
  const lowerCasedName = name.toLowerCase();

  return `---
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
  `;
};

module.exports = indexMdx;
