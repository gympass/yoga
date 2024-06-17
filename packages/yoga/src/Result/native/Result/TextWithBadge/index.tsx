import React, { ReactNode } from 'react';

import Badge from '../../Badge';

import { StyledBoxContainer, StyledText } from './styles';

interface TextWithBadgeProps {
  avatarWidth: number;
  badgeIcon: ReactNode;
  title: string;
}

const TextWithBadge = ({ badgeIcon, title }: TextWithBadgeProps) => {
  return (
    <StyledBoxContainer>
      <StyledText bold numberOfLines={1}>
        {title}
      </StyledText>
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
    </StyledBoxContainer>
  );
};

export default TextWithBadge;
