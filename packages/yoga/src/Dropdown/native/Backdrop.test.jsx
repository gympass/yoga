import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '../..';
import Backdrop from './Backdrop';

jest.useFakeTimers();

describe('<Backdrop />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(
        <ThemeProvider>
          <Backdrop title="Find an Activity">Some Content</Backdrop>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot when visible', () => {
      const { container } = render(
        <ThemeProvider>
          <Backdrop visible title="Find an Activity">
            Some Content
          </Backdrop>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
