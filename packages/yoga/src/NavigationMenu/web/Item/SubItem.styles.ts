import styled from 'styled-components';
import { theme, Box } from '@gympass/yoga';

const { colors, spacing, radii, fontWeights } = theme;

export const SubItem = styled.li`
  transition: background-color 0.28s ease-in-out;

  background-color: transparent;
  border-radius: ${radii.small}px;
  list-style-type: none;

  &:hover,
  &:focus {
    background-color: ${colors.light};

    p {
      color: ${colors.stamina};
    }
  }

  a {
    text-decoration: none;

    &.active {
      pointer-events: none;

      > div {
        cursor: unset;
        background-color: ${colors.yoga};

        p {
          color: ${colors.vibin};
          font-weight: ${fontWeights.medium};
        }
      }
    }
  }
`;

export const Content = styled(Box)`
  padding: 10px ${spacing.xxsmall}px 10px 44px;
  border-radius: ${radii.small}px;
`;
