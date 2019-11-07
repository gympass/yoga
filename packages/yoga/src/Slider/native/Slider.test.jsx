import React from 'react';
import { render, fireEvent, toJSON } from '@testing-library/react-native';
import ThemeProvider from '../../ThemeProvider';
import Slider from '../';

describe('<Slider />', () => {
  describe('Snapshots', () => {
    describe('Without props', () => {
      it('should match snapshot with default Slider', () => {
        const { container } = render(
          <ThemeProvider>
            <Slider />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });
    });
  });
});
