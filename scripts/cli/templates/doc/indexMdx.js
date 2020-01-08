const indexMdx = (name, platform) => {
  const lowerCasedName = name.toLowerCase();

  return `---
title: '${name}'
metaTitle: '${name}'
metaDescription: '${name} Component'
---

${
  !platform
    ? `
import ${name}Web from './${lowerCasedName}-web.mdx';
import ${name}Native from './${lowerCasedName}-native.mdx';
`
    : ''
}

# ${name}

${
  !platform
    ? `
<TabbedView>
  <Tab title="Web">
    <${name}Web />
  </Tab>

  <Tab title="Native">
    <${name}Native />
  </Tab>
</TabbedView>
`
    : ''
}
  `;
};

module.exports = indexMdx;
