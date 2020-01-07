const template = (name, type = 'web') => `import React from 'react';
import { render } from '@testing-library/react${
  type === 'native' ? '-native' : ''
}';
import { ThemeProvider, ${name} } from '../..';

describe('<${name} />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <${name} />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
`;

module.exports = template;
