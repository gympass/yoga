import React from 'react';
import { render } from '@testing-library/react-native';
import { Building } from '@gympass/yoga-icons';

import { ThemeProvider, Tag } from '../..';

describe('<Tag />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Tag>default</Tag>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with custom icon', () => {
    const { container } = render(
      <ThemeProvider>
        <Tag icon={Building}>default with custom icon</Tag>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with without icon', () => {
    const { container } = render(
      <ThemeProvider>
        <Tag icon={false}>default without icon</Tag>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with variant prop', () => {
    const { container } = render(
      <ThemeProvider>
        <Tag variant="informative">informative</Tag>
        <Tag variant="positive">positive</Tag>
        <Tag variant="negative">negative</Tag>
        <Tag variant="warning">warning</Tag>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with full prop', () => {
    const { container } = render(
      <ThemeProvider>
        <Tag full>full</Tag>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
