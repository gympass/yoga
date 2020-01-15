const nativeMdx = name => {
  const lowerCasedName = name.toLowerCase();

  return `### Reference

Gympass \`<${name} />\` description

### Usage

<ExpoSnack id="@gympass/yoga-${lowerCasedName}" theme="light" />

### Props

<PropsTable component="${name}" platform="native" />`;
};

module.exports = nativeMdx;
