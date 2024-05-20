import React, { isValidElement } from 'react';
import styled from 'styled-components';
import { arrayOf, string, shape, func, bool, node } from 'prop-types';
import { WellhubIcon } from '@gympass/yoga-icons';

import Text from '../../Text';
import Attendances from './Attendances';
import Box from '../../Box';
import Icon from '../../Icon';

const StyledBox = styled(Box)`
  width: 100%;
  border-bottom-width: ${({ divided }) => (divided ? 1 : 0)}px;
  border-bottom-color: ${({
    theme: {
      yoga: {
        colors: {
          elements: { lineAndBorders },
        },
      },
    },
  }) => lineAndBorders};
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
      margin-left: ${small}px;
      margin-bottom: ${large}px;
    `;
  }}
`;

const TitleAndBadgeContainer = styled(Box)`
  flex-direction: row;
  align-items: center;
`;

const ExclusiveBadge = () => (
  <Box
    ml="xxxsmall"
    bg="neon"
    justifyContent="center"
    alignItems="center"
    borderRadius="circle"
    w="small"
    h="small"
  >
    <Icon as={WellhubIcon} size={10.67} fill="text.primary" />
  </Box>
);

/**
 * The Result component is used when you have a list to show. It is applied to
 * the item individually, and has the option of being applied to different
 * formats based on the applied context. */
const Result = ({
  avatar: Avatar,
  attendances,
  rate,
  title,
  subTitle,
  divided,
  children,
  attendancesColor,
  exclusivity = false,
}) => (
  <StyledBox divided={divided} display="flex" flexDirection="row">
    {Avatar && <>{isValidElement(Avatar) ? Avatar : <Avatar />}</>}
    <Content>
      {!!attendances?.length && (
        <Attendances
          attendances={attendances}
          rate={rate}
          color={attendancesColor}
        />
      )}
      <TitleAndBadgeContainer>
        <Text.Body1 numberOfLines={1} bold>
          {title}
        </Text.Body1>
        {exclusivity && <ExclusiveBadge />}
      </TitleAndBadgeContainer>
      {subTitle && subTitle !== '' && (
        <Text.Body2 numberOfLines={1} color="deep">
          {subTitle}
        </Text.Body2>
      )}
      {children}
    </Content>
  </StyledBox>
);

Result.propTypes = {
  /** The component Avatar */
  avatar: node.isRequired,
  /** A list with the attendances */
  attendances: arrayOf(
    shape({
      description: string,
      icon: func,
    }),
  ),
  /** The evaluation of the partner */
  rate: string,
  /** The main title */
  title: string.isRequired,
  /** The text below the main title */
  subTitle: string,
  /** If it is to show the divide in the bottom */
  divided: bool,
  /** The chidren necessary */
  children: node,
  /** The color of attendences icon and description */
  attendancesColor: string,
  /** The property that defines a partner as exclusive */
  exclusivity: bool,
};

Result.defaultProps = {
  rate: undefined,
  divided: false,
  subTitle: undefined,
  children: undefined,
  attendances: undefined,
  attendancesColor: undefined,
  exclusivity: false,
};

export default Result;
