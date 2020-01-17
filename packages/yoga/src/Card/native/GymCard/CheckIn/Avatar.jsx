import styled from 'styled-components';

const Avatar = styled.Image`
  width: 48px;
  height: 48px;

  ${({
    theme: {
      yoga: {
        components: {
          card: {
            gym: { checkIn },
          },
        },
      },
    },
  }) => `
    border-radius: ${checkIn.avatar.border.radius}px;
  `}
`;

Avatar.displayName = 'Avatar';

const Placeholder = styled.View`
  ${({
    theme: {
      yoga: {
        colors: { gray },
        components: {
          card: {
            gym: { checkIn },
          },
        },
      },
    },
  }) => `
    width: 48px;
    height: 48px;

    align-items: center;
    justify-content: center;

    border: ${checkIn.avatar.border.width}px solid ${gray[3]};
    border-radius: ${checkIn.avatar.border.radius}px;
  `}
`;

export { Avatar, Placeholder };
