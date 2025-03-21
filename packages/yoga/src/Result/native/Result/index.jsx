import React, { isValidElement } from 'react';
import { arrayOf, string, shape, func, bool, node } from 'prop-types';

import Text from '../../../Text';
import Box from '../../../Box';
import Attendances from '../Attendances';

import { Content, StyledBox } from './styles';
import TextWithBadge from './TextWithBadge';

/**
 * The Result component is used when you have a list to show. It is applied to
 * the item individually, and has the option of being applied to different
 * formats based on the applied context. */
const Result = ({
  avatar: Avatar,
  attendances = undefined,
  rate = undefined,
  title,
  subTitle = undefined,
  divided = false,
  children = undefined,
  attendancesColor = undefined,
  badgeIcon = undefined,
}) => {
  return (
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
        {badgeIcon ? (
          <TextWithBadge badgeIcon={badgeIcon} title={title} />
        ) : (
          <Box>
            <Text.Body1 bold numberOfLines={1}>
              {title}
            </Text.Body1>
          </Box>
        )}
        {subTitle && subTitle !== '' && (
          <Text.Body2 numberOfLines={1} color="deep">
            {subTitle}
          </Text.Body2>
        )}
        {children}
      </Content>
    </StyledBox>
  );
};

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

export default Result;
