import React, { isValidElement } from 'react';
import styled from 'styled-components';
import { arrayOf, string, shape, func, boolean, node } from 'prop-types';
import Text from '../../Text';
import Attendances from './Attendances';
import Box from '../../Box';

const StyledBox = styled(Box)`
  width: 100%;
  ${({
    divided,
    theme: {
      yoga: {
        colors: { light },
      },
    },
  }) => {
    return `
       ${
         divided
           ? `
             border-bottom-width: 1px;
             border-bottom-color: ${light}
        `
           : ''
       }
    `;
  }}
`;

const Content = styled.View`
  flex: 1;
  ${({
    theme: {
      yoga: {
        spacing: { small, large },
      },
    },
  }) => {
    return `
      margin-left:${small}px;
      margin-bottom:${large}px;
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
      line-height: ${medium}px;
      margin-top: ${xxxsmall}px;
    `;
  }}
`;

/** The Result component is used when you have a list to show. It is applied to the item individually, and has the option of being applied to different formats based on the applied context. */
const Result = ({
  avatar: Avatar,
  attendances,
  rate,
  title,
  subTitle,
  divided,
  children,
}) => (
  <StyledBox divided={divided} display="flex" flexDirection="row">
    {Avatar && <>{isValidElement(Avatar) ? Avatar : <Avatar />}</>}
    <Content>
      <Attendances attendances={attendances} rate={rate} />
      <Title numberOfLines={1}>{title}</Title>
      {subTitle && subTitle !== '' && (
        <Text.Small numberOfLines={1} variant="stamina">
          {subTitle}
        </Text.Small>
      )}
      {children}
    </Content>
  </StyledBox>
);

Result.propTypes = {
  /** The component Avatar */
  avatar: func.isRequired,
  /** A list with the attendances */
  attendances: arrayOf(
    shape({
      description: string,
      icon: func,
    }),
  ).isRequired,
  /** The evaluation of the partner */
  rate: string,
  /** The main title */
  title: string.isRequired,
  /** The text below the main title */
  subTitle: string,
  /** If it is to show the divide in the bottom */
  divided: boolean,
  /** The chidren necessary */
  children: node,
};

Result.defaultProps = {
  rate: undefined,
  divided: false,
  subTitle: undefined,
  children: undefined,
};

export default Result;
