import React from 'react';
import { render } from '@testing-library/react-native';

import { ThemeProvider, Progress } from '../..';

describe('<Progress />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Progress />
        <Progress max={100} />
        <Progress max={100} value={60} />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with label string', () => {
    const { container } = render(
      <ThemeProvider>
        <Progress max={100} label={{ value: 'Some decription here' }} />
        <Progress
          max={100}
          value={65}
          label={{ value: 'Some decription here', placement: 'right' }}
        />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with label number', () => {
    const { container } = render(
      <ThemeProvider>
        <Progress max={100} value={20} label={{ value: 20 }} />
        <Progress
          max={100}
          value={65}
          label={{ value: 65, placement: 'right' }}
        />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with all variants', () => {
    const { container } = render(
      <ThemeProvider>
        <Progress
          max={100}
          value={20}
          label={{ value: 20 }}
          variant="primary"
        />
        <Progress
          max={100}
          value={20}
          label={{ value: 20 }}
          variant="secondary"
        />
        <Progress max={100} value={20} label={{ value: 20 }} variant="vibin" />
        <Progress max={100} value={20} label={{ value: 20 }} variant="hope" />
        <Progress max={100} value={20} label={{ value: 20 }} variant="energy" />
        <Progress max={100} value={20} label={{ value: 20 }} variant="relax" />
        <Progress max={100} value={20} label={{ value: 20 }} variant="peace" />
        <Progress max={100} value={20} label={{ value: 20 }} variant="verve" />
        <Progress max={100} value={20} label={{ value: 20 }} variant="uplift" />
        <Progress
          max={100}
          value={20}
          label={{ value: 20 }}
          variant="deepPurple"
        />
        <Progress
          max={100}
          value={20}
          label={{ value: 20 }}
          variant="stamina"
        />
        <Progress max={100} value={20} label={{ value: 20 }} variant="dark" />
        <Progress max={100} value={20} label={{ value: 20 }} variant="medium" />
        <Progress max={100} value={20} label={{ value: 20 }} variant="deep" />
        <Progress max={100} value={20} label={{ value: 20 }} variant="light" />
        <Progress max={100} value={20} label={{ value: 20 }} variant="clear" />
        <Progress max={100} value={20} label={{ value: 20 }} variant="white" />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
