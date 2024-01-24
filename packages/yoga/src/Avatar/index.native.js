import Avatar from './native/Avatar';
import AvatarCircle from './native/AvatarCircle';

const ExportAvatar = Object.assign(Avatar, { Circle: AvatarCircle });

export default ExportAvatar;
