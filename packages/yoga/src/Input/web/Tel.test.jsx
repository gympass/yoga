import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider, Input } from '../..';

describe('<Input.Tel />', () => {
  describe('Snapshots', () => {
    it('should match with default input', () => {
      const { container } = render(
        <ThemeProvider>
          <Input.Tel />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
