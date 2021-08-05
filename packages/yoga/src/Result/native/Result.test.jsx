import React from 'react';
import { render } from '@testing-library/react-native';

import { BuildingFilled } from '@gympass/yoga-icons';
import { ThemeProvider, Result } from '../../index.native';
import Avatar from '../../Avatar';

const attendanceList = [
  {
    description: 'Attendance 01',
    icon: BuildingFilled,
  },
  {
    description: 'Attendance 02',
    icon: BuildingFilled,
  },
];

describe('<Result />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Result
          rate="5.0"
          avatar={<Avatar.Circle />}
          attendances={attendanceList}
          title="Partner Name"
          subTitle="Activity"
          divided
        >
          <Result.Button>Link Button</Result.Button>
        </Result>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
