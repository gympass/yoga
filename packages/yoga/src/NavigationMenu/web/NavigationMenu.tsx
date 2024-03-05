import React from 'react';
import styled, { css } from 'styled-components';
import { media } from '@gympass/yoga-helpers';
import Menu from './Menu';
import Switcher from './Switcher';
import { Item, Subitem } from './Item';
import { BottomItems, BottomItem } from './BottomItems';
import Box from '../../Box';

const DeskTopContainer = css`
  ${({
    theme: {
      yoga: {
        components: {
          navigationmenu: { backgroundColor, gap, padding },
        },
      },
    },
  }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    gap: ${gap.medium}px;
    padding: ${padding.small}px ${padding.xsmall}px;
    background-color: ${backgroundColor.default};

    width: 280px;
    height: 100%;
    right: 0;

    transition: width 300ms ease-in-out;
  `}
`;

const StyledNavigationMenu = styled(Box)<{
  isOpenOnMobile: boolean;
  isResponsive: boolean;
  children: React.ReactNode;
}>`
  ${({ isOpenOnMobile, isResponsive }) => css`
    ${DeskTopContainer};

    ${isResponsive &&
    css`
      position: fixed;
      width: 100%;
      height: calc(100% - 56px);
      z-index: 10;
      top: 0;
      right: ${isOpenOnMobile ? '0' : '-100%'};

      transition: right 300ms ease-in-out;

      ${media.lg`${DeskTopContainer}`}
    `}
  `}
`;

const StyledHeader = styled(Box)`
  ${({
    theme: {
      yoga: {
        components: {
          navigationmenu: { gap },
        },
      },
    },
  }) =>
    css`
      display: flex;
      flex-direction: column;
      gap: ${gap.xxxsmall}px;
    `}
`;

const StyledItems = styled.nav`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
`;

const StyledItemsGroup = styled.ul`
  ${({
    theme: {
      yoga: {
        components: {
          navigationmenu: { gap, padding },
        },
      },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0 0 ${padding.small}px 0;
    gap: ${gap.xxxsmall}px;
  `}
`;

const StyledFooter = styled(Box)`
  ${({
    theme: {
      yoga: {
        components: {
          navigationmenu: { gap },
        },
      },
    },
  }) => css`
    display: flex;
    flex-direction: column;
    gap: ${gap.xxxsmall}px;
  `}
`;

type NavigationMenuProps = {
  children: React.ReactNode;
  openOnMobile?: boolean;
  responsive?: boolean;
};

const NavigationMenu = ({
  children,
  openOnMobile = false,
  responsive = true,
}: NavigationMenuProps) => {
  return (
    <StyledNavigationMenu
      isOpenOnMobile={openOnMobile}
      isResponsive={responsive}
    >
      {children}
    </StyledNavigationMenu>
  );
};

NavigationMenu.Header = StyledHeader;
NavigationMenu.Menu = Menu;
NavigationMenu.Switcher = Switcher;
NavigationMenu.Items = StyledItems;
NavigationMenu.ItemsGroup = StyledItemsGroup;
NavigationMenu.Item = Item;
NavigationMenu.Subitem = Subitem;
NavigationMenu.BottomItems = BottomItems;
NavigationMenu.BottomItem = BottomItem;
NavigationMenu.Footer = StyledFooter;

export default NavigationMenu;
