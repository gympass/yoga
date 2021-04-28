import React from 'react';
import styled from 'styled-components';

const StyledAvatar = styled.Text`
  ${({
    theme: {
      yoga: {
        components: { avatar },
      },
    },
  }) => ``}
`;

const Avatar = props => <StyledAvatar {...props} />;

Avatar.propTypes = {};

Avatar.defaultProps = {};

export default Avatar;
