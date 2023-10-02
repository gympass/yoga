import styled from 'styled-components';
import { theme, Box, Text as YogaText } from '@gympass/yoga';

const { colors, spacing, radii, fontWeights } = theme;

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
