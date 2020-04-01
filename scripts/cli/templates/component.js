const componentIndex = (name, type = name) => `import ${name} from './${type}';

export default ${name};
`;

const component = (name, type = 'web') => `import React from 'react';
import styled from 'styled-components';

const Styled${name} = styled.${type === 'web' ? 'div' : 'Text'}\`
  \${({
    theme: {
      yoga: {
        components: { ${name.toLowerCase()} },
      },
    },
  }) => \`\`}
\`;

const ${name} = props => <Styled${name} {...props} />;

${name}.propTypes = {};

${name}.defaultProps = {};

export default ${name};
`;

module.exports = {
  componentIndex,
  component,
};
