import React, { isValidElement } from 'react';

import { arrayOf, string, shape, func, bool, node } from 'prop-types';

import Text from '../../../Text';
import Attendances from '../Attendances';
import Badge from '../Badge';

import { Content, StyledBox, TitleAndBadgeContainer } from './styles';

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
  badgeIcon,
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
        {badgeIcon && (
          <Badge
            icon={badgeIcon}
            fill="text.primary"
            ml="xxxsmall"
            bg="neon"
            justifyContent="center"
            alignItems="center"
            borderRadius="circle"
            w="small"
            h="small"
          />
        )}
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
  /** The property that defines a whether a badge should be shown and which icon should be rendered */
  badgeIcon: node,
};

Result.defaultProps = {
  rate: undefined,
  divided: false,
  subTitle: undefined,
  children: undefined,
  attendances: undefined,
  attendancesColor: undefined,
  badgeIcon: undefined,
};

export default Result;
