import React from 'react';
import { render } from '@testing-library/react';
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

  it('should match snapshot with custom icon and informative type', () => {
    const { container } = render(
      <ThemeProvider>
        <Tag.Informative variant="success" icon={Building}>
          success with custom icon
        </Tag.Informative>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with without icon and informative type', () => {
    const { container } = render(
      <ThemeProvider>
        <Tag.Informative variant="success">
          success without icon
        </Tag.Informative>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with variant prop', () => {
    const { container } = render(
      <ThemeProvider>
        <Tag variant="success">success</Tag>
        <Tag variant="informative">informative</Tag>
        <Tag variant="attention">attention</Tag>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with variant prop and informative type', () => {
    const { container } = render(
      <ThemeProvider>
        <Tag.Informative variant="success">success</Tag.Informative>
        <Tag.Informative variant="informative">informative</Tag.Informative>
        <Tag.Informative variant="attention">attention</Tag.Informative>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with variant and margin prop ', () => {
    const { container } = render(
      <ThemeProvider>
        <Tag variant="success">success</Tag>
        <Tag mv="medium" variant="informative">
          informative
        </Tag>
        <Tag variant="attention">attention</Tag>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with variant prop and informative type with margin prop', () => {
    const { container } = render(
      <ThemeProvider>
        <Tag.Informative variant="success">success</Tag.Informative>
        <Tag.Informative mv="medium" variant="informative">
          informative
        </Tag.Informative>
        <Tag.Informative variant="attention">attention</Tag.Informative>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
