import React, { ReactNode, useCallback, useState } from 'react';
import { useWindowDimensions } from 'react-native';

import Badge from '../../Badge';

import { StyledBoxContainer, StyledText } from './styles';

interface TextWithBadgeProps {
  avatarWidth: number;
  badgeIcon: ReactNode;
  title: string;
}

const SCREEN_PADDINGS = 20;
const CONTENT_MARGINS = 20;
const AVATAR_CONTENT_MARGINS = 16;
const BADGE_LIMIT = 20;

const TextWithBadge = ({
  avatarWidth,
  badgeIcon,
  title,
}: TextWithBadgeProps) => {
  const [textSize, setTextSize] = useState<number>(0);
  const { width: windowWidth } = useWindowDimensions();

  const textMaxSize =
    windowWidth -
    (SCREEN_PADDINGS + CONTENT_MARGINS + AVATAR_CONTENT_MARGINS + avatarWidth);
  const shouldTruncate = textSize >= textMaxSize - BADGE_LIMIT;
  const containerWidth = shouldTruncate ? null : textSize;
  const textWidth = shouldTruncate ? '100%' : null;

  const onTextLayout = useCallback(
    ({
      nativeEvent: {
        layout: { width },
      },
    }) => {
      setTextSize(width);
    },
    [],
  );

  return (
    <StyledBoxContainer containerWidth={containerWidth}>
      <StyledText
        onLayout={onTextLayout}
        bold
        numberOfLines={1}
        textWidth={textWidth}
      >
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
