import React from 'react';
import { render } from '@testing-library/react-native';
import { WellhubIcon } from '@gympass/yoga-icons/src/svg/icon_wellhub.svg';

import { ThemeProvider } from '../../../../index';
import TextWithBadge from '.';

describe('TextWithBadge', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(
      <ThemeProvider>
        <TextWithBadge
          avatarWidth={50}
          badgeIcon={WellhubIcon}
          title="Text with badge"
        />
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should match snapshot with long title', () => {
    const { toJSON } = render(
      <ThemeProvider>
        <TextWithBadge
          avatarWidth={50}
          badgeIcon={WellhubIcon}
          title="This is an example of a very long title that should be truncated"
        />
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should match snapshot without badgeIcon', () => {
    const { toJSON } = render(
      <ThemeProvider>
        <TextWithBadge
          avatarWidth={50}
          badgeIcon={null}
          title="Title without Badge"
        />
      </ThemeProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
