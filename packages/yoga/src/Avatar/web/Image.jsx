import styled from 'styled-components';

const Image = styled.img`
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
