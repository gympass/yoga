import { bool, string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import YogaAvatar from '../../Avatar';
import Box from '../../Box';
import Text from '../../Text';

const Container = styled(Box)`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SubContainer = styled(Box)`
  justify-content: center;
`;

const Title = styled(Text.H4)``;
const Subtitle = styled(Text.Tiny)``;

const Avatar = styled(YogaAvatar.Circle)`
  ${({
    smallAvatar,
    theme: {
      yoga: {
        components: {
          heading: {
            titleContainer: { avatar },
          },
        },
      },
    },
  }) => `
    width: ${smallAvatar ? avatar.smallSize : avatar.largeSize}px
    height: ${smallAvatar ? avatar.smallSize : avatar.largeSize}px
  `}
`;

const TitleContainer = props => {
  const { title, subtitle, avatar, smallAvatar } = props;

  return (
    <Container>
      <SubContainer>
        <Title>{title}</Title>
        {subtitle && <Subtitle color="deep">{subtitle}</Subtitle>}
      </SubContainer>
      {avatar && <Avatar src={avatar} smallAvatar={smallAvatar} />}
    </Container>
  );
};

TitleContainer.propTypes = {
  title: string,
  subtitle: string,
  avatar: string,
  smallAvatar: bool,
};

TitleContainer.defaultProps = {
  title: '',
  subtitle: null,
  avatar: null,
  smallAvatar: false,
};

export default TitleContainer;
