import styled from 'styled-components';
import { Image as ImageNative } from 'react-native';

const Image = styled(ImageNative)`
  ${({
    type,
    theme: {
      yoga: {
        elevations: { small },
        radii,
      },
    },
  }) => {
    return `
      width: 100%;
      height: 100%;
      border-radius: ${type === 'circle' ? radii.circle : radii.small};
      box-shadow: ${small}
    `;
  }}
`;

export default Image;
