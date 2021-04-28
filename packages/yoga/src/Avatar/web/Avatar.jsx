import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Icon } from '@gympass/yoga';
import { UserFilled } from '@gympass/yoga-icons';

const AvatarWrapper = styled.div`
  ${() => `
  display: flex;
  align-items: center;
  justify-content: center;
    background: #9898A6;
    border-radius: 50%;
    height: 48px;
    width: 48px;
  `}
`;

const Avatar = ({
  src,
  theme: {
    yoga: {
      components: { avatar },
    },
  },
}) => {
  return (
    <AvatarWrapper avatar>
      {src ? (
        <img src={src} />
      ) : (
        <Icon
          as={UserFilled}
          fill={avatar.color}
          height={avatar.icon.size}
          width={avatar.icon.size}
        />
      )}
    </AvatarWrapper>
  );
};

Avatar.propTypes = {};

Avatar.defaultProps = {};

export default withTheme(Avatar);
