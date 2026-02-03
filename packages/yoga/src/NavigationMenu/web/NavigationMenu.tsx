import React from 'react';
import styled, { css } from 'styled-components';
import { media } from '@gympass/yoga-helpers';
import Menu from './Menu';
import Switcher from './Switcher';
import { Item, Subitem } from './Item';
import { BottomItems, BottomItem } from './BottomItems';

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

type NavigationMenuStyledProps = React.HTMLAttributes<HTMLDivElement> & {
  isOpenOnMobile: boolean;
  isResponsive: boolean;
  $zIndex?: number;
};

const StyledNavigationMenu = styled.div<NavigationMenuStyledProps>`
  ${({ isOpenOnMobile, isResponsive, $zIndex }) => css`
    ${DeskTopContainer};

    ${isResponsive &&
    css`
      position: fixed;
      width: 100%;
      height: calc(100% - 56px);
      z-index: ${$zIndex ?? 1};
      top: 0;
      right: ${isOpenOnMobile ? '0' : '-100%'};

      transition: right 300ms ease-in-out;

      ${media.lg`${DeskTopContainer}`}
    `}
  `}
`;

const StyledHeader = styled.header`
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

const StyledItemsGroup = styled.ul<React.PropsWithChildren>`
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

const StyledFooter = styled.footer`
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
  zIndex?: number;
};

const NavigationMenu: any = ({
  children,
  openOnMobile = false,
  responsive = true,
  zIndex = 1,
  ...htmlAttributes
}: NavigationMenuProps) => (
  <StyledNavigationMenu
    {...htmlAttributes}
    isOpenOnMobile={openOnMobile}
    isResponsive={responsive}
    $zIndex={zIndex}
  >
    {children}
  </StyledNavigationMenu>
);

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
