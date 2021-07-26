import React, { isValidElement } from 'react';
import styled, { withTheme } from 'styled-components';
import { arrayOf, string, shape, func, boolean } from 'prop-types';
import Text from '../../Text';
import Attendance from './Attendance';

const StyledSearchList = styled.View`
  position: relative;
  display: flex;
  flex-direction: row;
  ${({
    divided,
    theme: {
      yoga: {
        spacing: { medium },
        colors: { light },
      },
    },
  }) => {
    return `
      margin-left:${medium};
       ${
         divided
           ? `
          border-bottom-color: ${light};
        `
           : ''
       }
    `;
  }}
`;

const Content = styled.View`
  ${({
    theme: {
      yoga: {
        spacing: { medium },
      },
    },
  }) => {
    return `
      margin-left:${medium};
    `;
  }}
`;

const Title = styled(Text.Medium)`
  ${({
    theme: {
      yoga: {
        spacing: { xxxsmall },
        lineHeights: { medium },
      },
    },
  }) => {
    return `
      line-height:${medium}
      margin-top: ${xxxsmall};
    `;
  }}
`;

const Result = ({
  avatar: Avatar,
  attendances,
  rate,
  title,
  subTitle,
  divider,
}) => (
  <StyledSearchList>
    {Avatar && <>{isValidElement(Avatar) ? Avatar : <Avatar />}</>}
    <Content>
      <Attendance attendances={attendances} rate={rate} />
      <Title>{title}</Title>
      <Subtitle>{subTitle}</Subtitle>
    </Content>
  </StyledSearchList>
);

Result.propTypes = {
  avatar: func.isRequired,
  attendances: arrayOf(
    shape({
      description: string,
      icon: func,
    }),
  ).isRequired,
  rate: string,
  title: string.isRequired,
  subTitle: string.isRequired,
  divider: boolean,
};

Result.defaultProps = {
  rate: undefined,
  divider: false,
};

export default withTheme(Result);
