const indexTemplate = name => `import ${name} from './${name}';

export default ${name};
`;

const componentTemplate = (name, type = 'web') => `import React from 'react';
import styled from 'styled-components';

const ${name} = styled.${type === 'web' ? 'div' : 'Text'}\`\`;

${name}.propTypes = {};
${name}.defaultProps = {};

export default ${name};
`;

module.exports = {
  indexTemplate,
  componentTemplate,
};
