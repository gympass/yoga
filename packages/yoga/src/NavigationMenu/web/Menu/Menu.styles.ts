import styled, { css } from 'styled-components';
import { theme, Box, Text as YogaText } from '@gympass/yoga';

const { spacing, colors, radii, fontWeights } = theme;

type MenuProps = {
  hasAction: boolean;
};

export const Menu = styled(Box)<MenuProps>`
  transition: background-color 300ms ease-in-out;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: ${spacing.xxsmall}px;
  padding: ${spacing.xsmall}px;
  background-color: ${colors.white};
  border-radius: ${radii.circle}px;
  border: 1px solid ${colors.white};

  > div:first-child {
    height: ${spacing.xlarge}px;
    width: ${spacing.xlarge}px;
  }

  ${({ hasAction }) =>
    hasAction &&
    css`
      :hover,
      &:focus {
        cursor: pointer;
        border: 1px solid ${colors.light};
      }
    `}
`;

export const TextContainer = styled(Box)`
  flex: 1;
  overflow: hidden;
`;

export const Text = styled(YogaText.Small)`
  font-weight: ${fontWeights.medium};
  flex: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
