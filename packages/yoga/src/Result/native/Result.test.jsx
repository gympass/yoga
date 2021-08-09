import React from 'react';
import { render } from '@testing-library/react-native';

import { BuildingFilled } from '@gympass/yoga-icons';
import { ThemeProvider, Result } from '../../index.native';

import Avatar from '../../Avatar';
import Text from '../../Text';

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

const entranceList = [
  {
    children: 'From 7:30 am to 9:00 pm',
    variant: 'stamina',
  },
];

const activitiesList = [
  {
    children: 'Yoga',
    variant: 'deep',
  },
  {
    children: 'Meditation',
    variant: 'deep',
  },
  {
    children: 'Pilates',
    variant: 'deep',
  },
  {
    children: '04',
    variant: 'deep',
  },
];

const tagsList = [
  {
    children: 'Plan x Product availability',
    variant: 'informative',
  },
  {
    children: 'Restriction',
    variant: 'attention',
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
          <Result.Details items={entranceList} dots renderItem={Text.Small} />
          <Result.Details
            items={activitiesList}
            dots
            limit={3}
            renderItem={Text.Small}
          />
          <Result.Tags items={tagsList} />
          <Result.Button>Link Button</Result.Button>
        </Result>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
