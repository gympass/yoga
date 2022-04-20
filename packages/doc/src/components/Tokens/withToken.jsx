import React from 'react';
import yogaTokensModule from '@gympass/yoga-tokens';
import { element, string } from 'prop-types';

const getKeys = (tokensModule, values) => {
  const tokens = Object.entries(tokensModule);

  return values.map((value, index) => {
    const keys = tokens.filter(([, v]) => v === value);
    const key = keys.length > 1 ? keys[1][0] : keys[0][0];
    const isAlias = key !== index.toString();

    return { type: isAlias ? 'alias' : 'position', position: index, key };
  });
};

const withToken = (Component) => {
  const WithToken = ({ token, ...rest }) => {
    const tokensModule = yogaTokensModule[token];
    const tokensValues = [...new Set(Object.values(tokensModule))];
    const tokensKeys = getKeys(tokensModule, tokensValues);

    const data = tokensKeys.map(({ type, position, key }) => ({
      token,
      id: key,
      key: `${token}[${position}]`,
      alias: type === 'alias' ? `${token}.${key}` : '--',
      value: tokensValues[position],
    }));

    return <Component token={token} data={data} {...rest} />;
  };

  WithToken.propTypes = {
    token: string.isRequired,
  };

  return WithToken;
};

withToken.propTypes = {
  Component: element.isRequired,
};

export default withToken;
