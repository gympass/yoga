import styled from 'styled-components';
import { theme, Box, Text as YogaText, Tag as YogaTag } from "@gympass/yoga";

const { colors, spacing, radii, fontWeights } = theme as any;

export const Content = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: ${spacing.xxsmall}px;
  padding: 10px ${spacing.xxsmall}px 10px ${spacing.small}px;
  border-radius: ${radii.small}px;
`;

export const Tag = styled(YogaTag)`
  text-transform: uppercase;
  background-color: ${colors.stamina};
  color: ${colors.white};
  border-radius: ${radii.circle}px;
`;

export const Text = styled(YogaText)`
  color: ${colors.deep};
  flex: 1;
`;

export const Item = styled.li`
  transition: background-color 0.28s ease-in-out;

  background-color: transparent;
  border-radius: ${radii.small}px;

  svg {
    height: ${spacing.medium}px;
    width: ${spacing.medium}px;
  }

  &:hover,
  &:focus {
    background-color: ${colors.light};

    ${Text} {
      color: ${colors.stamina};
    }

    svg {
      fill: ${colors.stamina};
    }
  }

  a {
    &.active {
      pointer-events: none;

      > ${Content} {
        cursor: unset;
        background-color: ${colors.yoga};

        ${Text} {
          color: ${colors.vibin};
          font-weight: ${fontWeights.medium};
        }

        svg {
          fill: ${colors.vibin};
        }

        > ${Tag} {
          background-color: ${colors.stamina};
        }
      }
    }
  }
`;
