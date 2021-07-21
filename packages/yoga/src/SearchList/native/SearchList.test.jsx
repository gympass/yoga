import React from 'react';
import { render } from '@testing-library/react-native';

import { ThemeProvider, SearchList } from '../..';

describe('<SearchList />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <SearchList />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
