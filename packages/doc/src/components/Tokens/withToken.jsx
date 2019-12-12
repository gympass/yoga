import React from 'react';
import yogaTokensModule from '@gympass/yoga-tokens';

const getAlias = (module, values) => {
  return values.map(value => {
    const tokens = Object.entries(module);
    const [, [alias]] = tokens.filter(([, v]) => v === value);
    return alias;
  });
};

const withToken = Component => ({ token, ...rest }) => {
  const tokensModule = yogaTokensModule[token];
  const tokensValues = [...new Set(Object.values(tokensModule))];
  const hasAlias = tokensValues.length !== Object.keys(tokensModule).length;
  const tokensAlias = hasAlias
    ? getAlias(tokensModule, tokensValues)
    : Object.keys(tokensModule);

  const data = tokensAlias.map((alias, index) => {
    const name = hasAlias ? `${token}.${alias}` : `${token}[${alias}]`;
    const value = tokensValues[index];
    return { token, alias, name, value };
  });

  return <Component token={token} hasAlias={hasAlias} data={data} {...rest} />;
};

export default withToken;
