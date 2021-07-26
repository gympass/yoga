import React from 'react';
import styled from 'styled-components';
import { arrayOf, func, shape, string } from 'prop-types';
import Icon from '../../Icon';
import Text from '../../Text';
import Rate from './Rate';

const Content = styled.View`
  display: flex;
  flex-direction: row;
`;

const Description = styled(Text.Regular)`
  ${({
    theme: {
      yoga: {
        lineHeights: { xsmall },
        spacing: { xxxsmall },
      },
    },
  }) => {
    return `
      line-height:${xsmall};
      margin-left:${xxxsmall};
    `;
  }}
`;

const AttendanceList = styled(Text.Regular)`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({
    theme: {
      yoga: {
        spacing: { xxxsmall },
      },
    },
  }) => {
    return `
      margin-right:${xxxsmall};
    `;
  }}
`;

const Attendance = ({ attendanceList, rate }) => (
  <Content>
    <AttendanceList size="xsmall" variant="deep">
      {attendanceList &&
        attendanceList.map(({ description, icon }) => (
          <>
            <Icon as={icon} width="xsmall" height="xsmall" fill="medium" />
            {description}
          </>
        ))}
    </AttendanceList>
    {rate && <Rate rate={rate} />}
  </Content>
);

Attendance.propTypes = {
  attendanceList: arrayOf(
    shape({
      description: string,
      icon: func,
    }),
  ).isRequired,
  rate: string,
};

Attendance.defaultProps = {
  rate: undefined,
};

export default Attendance;
