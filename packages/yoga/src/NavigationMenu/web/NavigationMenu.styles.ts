import styled from 'styled-components';
import { theme, Box } from '@gympass/yoga';

const { spacing, colors } = theme;

export const NavigationMenu = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 100%;
  gap: ${spacing.medium}px;
  padding: ${spacing.small}px ${spacing.xsmall}px;
  background-color: ${colors.clear};
`;

export const Header = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xxxsmall}px;
`;

export const Items = styled.nav`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
`;

export const ItemsGroup = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0 0 ${spacing.small}px 0;
  gap: ${spacing.xxxsmall}px;
`;

export const Footer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xxxsmall}px;
`;
