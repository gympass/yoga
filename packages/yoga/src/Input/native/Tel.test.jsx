import React from 'react';
import { render } from '@testing-library/react-native';

import { ThemeProvider, Input } from '../..';

describe('<Input.Tel />', () => {
  describe('Snapshots', () => {
    it('should match with default input', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Input.Tel />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });
  });
});
