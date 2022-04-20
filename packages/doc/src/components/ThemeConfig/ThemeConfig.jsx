import React from 'react';
import styled from 'styled-components';
import { themes } from '@gympass/yoga';
import { string, func } from 'prop-types';

import { Dropdown } from '..';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ThemeConfig = ({ theme, setTheme }) => {
  const spacesInPascalCase = (word) => {
    const spacedWord = word
      .match(/($[a-z])|[A-Z][^A-Z]+/g)
      .map((item, index) => (index >= 1 ? item.toLowerCase() : item));

    return spacedWord.join(' ');
  };

  const options = Object.keys(themes)
    .filter((item) => item !== 'default')
    .map((item) => ({ value: item, label: spacesInPascalCase(item) }));

  const selectedItem = options.filter((item) => theme === item.value)[0];

  return (
    <Wrapper>
      <Dropdown
        width={120}
        options={options}
        onChange={({ value }) => setTheme(value)}
        selectedItem={selectedItem}
      />
    </Wrapper>
  );
};

ThemeConfig.propTypes = {
  theme: string,
  setTheme: func.isRequired,
};

ThemeConfig.defaultProps = {
  theme: 'EndUser',
};

export default ThemeConfig;
