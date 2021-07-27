import React from 'react';
import styled from 'styled-components';
import { Result, Avatar } from '@gympass/yoga';
import { BuildingFilled } from '@gympass/yoga-icons';
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
        avatar={<Avatar.Circle />}
        attendances={attendanceList}
        title="Partner Name"
        subTitle="Activity"
        divided
      >
        <Result.Button>Link Button</Result.Button>
      </Result>
    </ResultWrapper>
  </ScrollView>
);

export default ResultPage;
