import React, { useCallback, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { string, number, node } from 'prop-types';

import Text from '../../../Text';
import Box from '../../../Box';
import Badge from '../Badge';

const SCREEN_PADDINGS = 20;
const CONTENT_MARGINS = 20;
const AVATAR_CONTENT_MARGINS = 16;
const BADGE_LIMIT = 20;

const TextWithBadge = ({ avatarWidth, badgeIcon, title }) => {
  const [textSize, setTextSize] = useState(0);
  const { width: windowWidth } = useWindowDimensions();

  const textMaxSize =
    windowWidth -
    (SCREEN_PADDINGS + CONTENT_MARGINS + AVATAR_CONTENT_MARGINS + avatarWidth);
  const shouldTruncate = textSize >= textMaxSize - BADGE_LIMIT;
  const containerWidth = shouldTruncate ? null : textSize;
  const textWidth = shouldTruncate ? '100%' : null;

  const onTextLayout = useCallback(event => {
    const { width } = event.nativeEvent.layout;

    setTextSize(width);
  }, []);

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-end"
      position="relative"
      width={containerWidth}
    >
      <Text.Body1
        onLayout={onTextLayout}
        bold
        position="absolute"
        left={0}
        numberOfLines={1}
        paddingRight="medium"
        flex={1}
        width={textWidth}
      >
        {title}
      </Text.Body1>
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
    </Box>
  );
};

TextWithBadge.propTypes = {
  avatarWidth: number.isRequired,
  badgeIcon: node.isRequired,
  title: string.isRequired,
};

TextWithBadge.defaultProps = {};

export default TextWithBadge;
