import React, { useState } from 'react';
import styled from 'styled-components';
import { themes } from '@gympass/yoga';
import * as tokens from '@gympass/yoga-tokens';
import { string, func } from 'prop-types';

import { Dropdown } from '..';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ThemeConfig = ({ theme, locale, setTheme, setLocale }) => {
  const options = [
    { value: 'endUser', label: 'End-user' },
    { value: 'corp', label: 'Corporate' },
    { value: 'gyms', label: 'Gyms' },
  ];

  const selectedItem = options.filter(item => theme === item.value)[0];

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
  locale: string,
  setTheme: func.isRequired,
  setLocale: func.isRequired,
};

ThemeConfig.defaultProps = {
  theme: 'endUser',
  locale: 'default',
};

export default ThemeConfig;
