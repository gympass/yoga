import { injectImport, getStateTypeCode } from '..';

const web = (imports, code, theme) => {
  const isState = code.search('render') !== -1;

  const buildCode = component => `import React, { useState, useEffect } from 'react';
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
    const {
      styledComponents,
      codeBetweenRenderAndReturn,
      componentCode,
    } = getStateTypeCode(code);

    return buildCode(`${styledComponents || ''}
const App = () => {
  ${codeBetweenRenderAndReturn}

  return (
    <ThemeProvider${theme ? `theme='${theme}'` : ''}>
      <FontLoader />
      ${componentCode}
    </ThemeProvider>
  );
};`);
  }

  return buildCode(`const App = () => (
  <ThemeProvider${theme ? `theme='${theme}'` : ''}>
    <FontLoader />
    ${code}
  </ThemeProvider>
);`);
};

export default web;
