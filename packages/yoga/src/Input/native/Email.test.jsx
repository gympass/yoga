import React from 'react';
import { render } from '@testing-library/react-native';

import { ThemeProvider, Input } from '../..';

describe('<Input.Email />', () => {
  describe('Snapshots', () => {
    it('should match with default input', () => {
      const { toJSON } = render(
        <ThemeProvider>
          <Input.Email />
        </ThemeProvider>,
      );

      expect(toJSON()).toMatchSnapshot();
    });
  });
});
