const nativeMdx = name => `### Reference

Gympass \`<${name} />\` description

### Usage

\`\`\`javascript type=expo
  <${name} />
\`\`\`

### Props

<PropsTable component="${name}" platform="native" />`;

module.exports = nativeMdx;
