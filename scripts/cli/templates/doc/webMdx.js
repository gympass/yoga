const webMdx = name =>
  `### Reference

Gympass \`<${name} />\` description

### Usage

\`\`\`javascript
  <${name}>${name}</${name}>
\`\`\`

### Props

<PropsTable component="${name}" platform="web" />
`;

module.exports = webMdx;
