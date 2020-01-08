const webMdx = name =>
  `### Reference

Gympass \`<${name} />\` description

### Usage

\`\`\`javascript reactLive=true
  <${name}>${name}</${name}>
\`\`\`

### Props

<PropsTable component="${name}" platform="web" />
`;

module.exports = webMdx;
