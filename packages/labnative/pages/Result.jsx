import React from 'react';
import styled from 'styled-components';
import { Result, Avatar } from '@gympass/yoga';
import { BuildingFilled, Youtube } from '@gympass/yoga-icons';
import avatar from '../assets/images/avatarIcons/avatar.png';
import { DocTitle } from '../components';

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

const attendanceList2 = [
  {
    description: 'In person',
    icon: BuildingFilled,
  },
  {
    description: 'Online',
    icon: Youtube,
  },
];

const activitiesList = [
  {
    children: 'Activities 01',
    variant: 'deep',
  },
  {
    children: '02',
    variant: 'deep',
  },
  {
    children: '03',
    variant: 'deep',
  },
  {
    children: '04',
    variant: 'deep',
  },
  {
    children: '05',
    variant: 'deep',
  },
  {
    children: '06',
    variant: 'deep',
  },
  {
    children: '07',
    variant: 'deep',
  },
];

const entranceList = [
  {
    children: 'Entrance01',
    icon: PinFilled,
    variant: 'stamina',
  },
  {
    children: 'Entrance02',
    variant: 'stamina',
  },
  {
    children: 'Entrance03',
    variant: 'stamina',
  },
];

const ScrollView = styled.ScrollView`
  padding: 10px;
  margin-bottom: 50px;

  width: 100%;
`;

const ResultWrapper = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  padding: 20px;
  margin-bottom: 10px;

  width: 100%;
  height: 250px;
`;

const ResultPage = () => (
  <ScrollView>
    <ResultWrapper>
      <DocTitle>Default Result</DocTitle>
      <Result
        rate="5.0"
        avatar={<Avatar />}
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
        <Result.Button>Link Button</Result.Button>
      </Result>
    </ResultWrapper>
    <ResultWrapper>
      <DocTitle>Default Result With Circle Avatar</DocTitle>
      <Result
        rate="New"
        avatar={<Avatar.Circle src={avatar} />}
        attendances={attendanceList2}
        title="Partner Name"
        divided
      >
        <Result.Details items={entranceList} dots renderItem={Text.Small} />
        <Result.Details
          items={activitiesList}
          dots
          limit={3}
          renderItem={Text.Small}
        />
        <Result.Button>Upgrade</Result.Button>
      </Result>
    </ResultWrapper>
  </ScrollView>
);

export default ResultPage;
