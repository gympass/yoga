import styled from 'styled-components';
import { theme, Box } from '@gympass/yoga';

const { spacing, colors, radii } = theme;

export const Action = styled(Box)`
  transition: background-color 300ms ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;
  width: ${spacing.xxlarge}px;
  height: ${spacing.xxlarge}px;
  border-radius: ${radii.circle}px;

  :hover,
  &:focus {
    cursor: pointer;
    background-color: ${colors.light};
  }
`;
