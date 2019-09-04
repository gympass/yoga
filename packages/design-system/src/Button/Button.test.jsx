import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('<Button />', () => {
  describe('Snapshots', () => {
    it('should match snapshot', () => {
      const { container } = render(<Button />);
      expect(container).toMatchSnapshot();
    });
  });
});
