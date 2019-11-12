import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider from '../../ThemeProvider';
import Card from '..';

const data = {
  plan: {
    name: 'Basic',
    price: 'U$ 19.90',
    period: 'month',
    gyms: '1,239',
  },
  ribbonDefault: { label: 'Upgrade' },
  ribbonSecondary: { label: 'Upgrade', secondary: true },
};

describe('<Card />', () => {
  it('should match snapshot with default Card', () => {
    const { container } = render(
      <ThemeProvider>
        <Card>
          <h1>Hello World</h1>
        </Card>
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
  it('should match texts with Plan Card', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Card.Plan plan={data.plan} />
      </ThemeProvider>,
    );
    expect(getByText(data.plan.name)).toBeTruthy();
    expect(getByText(data.plan.price)).toBeTruthy();
    expect(getByText(`/${data.plan.period}`)).toBeTruthy();
    expect(getByText(`${data.plan.gyms} gyms`)).toBeTruthy();
  });
  it('should match snapshot Plan Card with secondary prop', () => {
    const { container } = render(
      <ThemeProvider>
        <Card.Plan secondary plan={data.plan} />
      </ThemeProvider>,
    );
    expect(container).toMatchSnapshot();
  });
  it('should match text Plan Card with ribbon default', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Card.Plan plan={data.plan} ribbon={data.ribbonDefault} />
      </ThemeProvider>,
    );
    expect(getByText(data.ribbonDefault.label)).toBeTruthy();
  });
  it('should match text Plan Card with ribbon secondary', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Card.Plan plan={data.plan} ribbon={data.ribbonSecondary} />
      </ThemeProvider>,
    );
    expect(getByText(data.ribbonSecondary.label)).toBeTruthy();
  });
});
