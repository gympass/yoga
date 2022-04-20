import { injectImport, getCodeFragments } from '..';

const web = (imports, code) => {
  const isState = code.search('render') !== -1;

  const buildCode = (
    component,
  ) => `import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
${injectImport(imports, ['ThemeProvider, FontLoader'], ['@gympass/yoga'])}

${component}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
`;

  if (isState) {
    const { styledComponents, codeBetweenRenderAndReturn, componentCode } =
      getCodeFragments(code);

    return buildCode(`${styledComponents || ''}
const App = () => {
  ${codeBetweenRenderAndReturn.trim()}

  return (
    <ThemeProvider>
      <FontLoader />
      ${componentCode}
    </ThemeProvider>
  );
};`);
  }

  return buildCode(`const App = () => (
  <ThemeProvider>
    <FontLoader />
    ${code}
  </ThemeProvider>
);`);
};

export default web;
