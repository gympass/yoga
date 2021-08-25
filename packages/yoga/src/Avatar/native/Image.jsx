import styled from 'styled-components';
import { Image as ImageNative } from 'react-native';

const Image = styled(ImageNative)`
  width: 100%;
  height: 100%;
  ${({
    type,
    theme: {
      yoga: { radii },
    },
  }) => {
    return `
      border-radius: ${type === 'circle' ? radii.circle : radii.small};
    `;
  }}
`;

export default Image;
