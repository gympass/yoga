import React from 'react';
import Avatar from './Avatar';

const AvatarCircle = props => <Avatar {...props} borderRadius="circle" />;

AvatarCircle.propTypes = Avatar.propTypes;

AvatarCircle.defaultProps = Avatar.defaultProps;

AvatarCircle.displayName = 'Avatar.Circle';

export default AvatarCircle;
