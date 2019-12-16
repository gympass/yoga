/* eslint-disable eqeqeq */
import React from 'react';
import yogaTokensModule from '@gympass/yoga-tokens';

const getKeys = (module, values) => {
  const tokens = Object.entries(module);

  return values.map((value, index) => {
    const keys = tokens.filter(([, v]) => v === value);
    const key = keys.length > 1 ? keys[1][0] : keys[0][0];
    const isAlias = key != index;
    return { type: isAlias ? 'alias' : 'position', position: index, key };
  });
};

const withToken = Component => ({ token, ...rest }) => {
  const tokensModule = yogaTokensModule[token];
  const tokensValues = [...new Set(Object.values(tokensModule))];
  const tokensKeys = getKeys(tokensModule, tokensValues);

  const data = tokensKeys.map(({ type, position, key }) => {
    const keyName = `${token}[${position}]`;
    const alias = type === 'alias' ? `${token}.${key}` : '--';
    const value = tokensValues[position];

    return {
      token,
      id: key,
      key: keyName,
      alias,
      value,
    };
  });

  return <Component token={token} data={data} {...rest} />;
};

export default withToken;
