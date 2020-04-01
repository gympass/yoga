const theme = name => `const ${name} = () => ({});

export default ${name};
`;

module.exports = theme;
