import styled from 'styled-components';
import { theme, Box } from "@gympass/yoga";

const { colors, spacing, radii } = theme;

type SwitcherProps = {
  fill: string;
};

export const Switcher = styled(Box)<SwitcherProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: ${spacing.xxsmall}px;
  padding: ${spacing.xsmall}px;
  background-color: ${({ fill }) => colors[fill]};
  border-radius: ${radii.small}px;

  > div:first-child {
    height: ${spacing.xlarge}px;
    width: ${spacing.xlarge}px;
  }
`;
