import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '../..';
import { Hide } from '.';

describe('<Hide />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(
        <ThemeProvider>
          <Hide xxs xs sm md lg xl xxl xxxl>
            <div>foo</div>
          </Hide>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should hide starting from md breakpoint', () => {
      const { container } = render(
        <ThemeProvider>
          <Hide md-start>
            <div>foo</div>
          </Hide>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
