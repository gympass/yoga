import React from 'react';
import { render } from '@testing-library/react';
import Switch from './Switch';

describe('<Switch />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Switch />);
      expect(container).toMatchSnapshot();
    });
  });
});
