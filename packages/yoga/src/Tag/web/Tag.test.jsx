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

  it('should match snapshot with all variants', () => {
    const { container } = render(
      <ThemeProvider>
        <Tag variant="primary">primary</Tag>
        <Tag variant="secondary">secondary</Tag>
        <Tag variant="vibin">vibin</Tag>
        <Tag variant="hope">hope</Tag>
        <Tag variant="energy">energy</Tag>
        <Tag variant="relax">relax</Tag>
        <Tag variant="peace">peace</Tag>
        <Tag variant="verve">verve</Tag>
        <Tag variant="uplift">uplift</Tag>
        <Tag variant="deepPurple">deepPurple</Tag>
        <Tag variant="stamina">stamina</Tag>
        <Tag variant="dark">dark</Tag>
        <Tag variant="medium">medium</Tag>
        <Tag variant="deep">deep</Tag>
        <Tag variant="light">light</Tag>
        <Tag variant="clear">clear</Tag>
        <Tag variant="white">white</Tag>
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
