import React from 'react';
import { render } from '@testing-library/react-native';

import { ThemeProvider, TextArea } from '../..';

describe('<TextArea />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <TextArea />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
