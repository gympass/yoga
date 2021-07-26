import React from 'react';
import styled from 'styled-components';
import { SearchList, Avatar } from '@gympass/yoga';
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

const SearchListWrapper = styled.View`
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
    <SearchListWrapper>
      <DocTitle>Default Avatar without image prop</DocTitle>
      <SearchList>
        <SearchList.Header
          rate="5.0"
          avatar={<Avatar />}
          attendanceList={attendanceList}
        >
          Partner Name
        </SearchList.Header>
      </SearchList>
    </SearchListWrapper>
    <SearchListWrapper>
      <DocTitle>Default Avatar without image prop</DocTitle>
      <SearchList>
        <SearchList.Header
          rate="5.0"
          avatar={<Avatar.Circle />}
          attendanceList={attendanceList}
        >
          Partner Name
        </SearchList.Header>
      </SearchList>
    </SearchListWrapper>
  </ScrollView>
);

export default ResultPage;
