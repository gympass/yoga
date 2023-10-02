import styled from 'styled-components';
import { theme, Box } from '@gympass/yoga';
import { media } from '@gympass/yoga-helpers';

const { spacing, colors } = theme;

type NavigationMenuProps = {
  isOpenOnMobile: boolean;
  isResponsive: boolean;
};

export const NavigationMenu = styled(Box)<NavigationMenuProps>`
  display: flex;
  flex-direction: column;
  gap: ${spacing.medium}px;
  padding: ${spacing.small}px ${spacing.xsmall}px;
  background-color: ${colors.clear};

  width: 280px;
  height: 100%;
  right: 0;

  transition: width 300ms ease-in-out;

  ${({ isResponsive }) =>
    isResponsive &&
    media.max('lg')`
    position: absolute;
    width: 100%;
    height: calc(100% - 74px);
    z-index: 10;
    right: ${({ isOpenOnMobile }) => (isOpenOnMobile ? '0' : '-100%')};

    transition: right 300ms ease-in-out;
  `}
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
