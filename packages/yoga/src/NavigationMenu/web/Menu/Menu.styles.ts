import styled, { css } from 'styled-components';
import { theme, Box } from "@gympass/yoga";

const { spacing, colors, radii } = theme;

type MenuProps = {
  hasAction: boolean;
};

export const Menu = styled(Box)<MenuProps>`
  transition: background-color 0.28s ease-in-out;

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
