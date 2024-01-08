import React from 'react';
import styled, { css } from 'styled-components';
import { Text, Skeleton } from '@gympass/yoga';
import Actions from './Actions';
import Box from '../../../Box';

const StyledSwitcher = styled(Box)`
  ${({
    fill,
    theme: {
      yoga: {
        colors,
        components: {
          navigationmenu: { border, gap, height, padding, width },
        },
      },
    },
  }) =>
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      gap: ${gap.xxsmall}px;
      padding: ${padding.xsmall}px;
      background-color: ${colors[fill]};
      border-radius: ${border.radius.default}px;

      > div:first-child {
        height: ${height.xlarge}px;
        width: ${width.xlarge}px;
      }
    `}
`;

const StyledTextContainer = styled(Box)`
  flex: 1;
  overflow: hidden;
`;

const StyledTitle = styled(Text.Small)`
  ${({
    theme: {
      yoga: {
        components: {
          navigationmenu: { font },
        },
      },
    },
  }) =>
    css`
      font-weight: ${font.weight.medium};
      flex: 1;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    `}
`;

export type SwitcherActionsProps = {
  id: string;
  label: string;
  onClick: () => void;
};

type SwitcherProps = {
  actions?: SwitcherActionsProps[];
  avatar: React.ReactElement;
  fill?: string;
  isLoading?: boolean;
  sideOffset?: number;
  subtitle?: string;
  title?: string;
};

const Switcher = ({
  actions,
  avatar: Avatar,
  fill = 'transparent',
  isLoading = false,
  sideOffset = 36,
  subtitle,
  title,
}: SwitcherProps) => {
  const hasActions = actions?.length;

  return (
    <StyledSwitcher fill={fill}>
      {Avatar}

      <StyledTextContainer>
        {isLoading ? (
          <>
            <Skeleton
              type="text"
              variant="overline"
              width="100%"
              marginBottom="4px"
            />
            <Skeleton type="text" variant="overline" width="100%" />
          </>
        ) : (
          <>
            {title && <StyledTitle>{title}</StyledTitle>}
            {subtitle && <Text.Tiny color="deep">{subtitle}</Text.Tiny>}
          </>
        )}
      </StyledTextContainer>

      {hasActions && <Actions actions={actions} sideOffset={sideOffset} />}
    </StyledSwitcher>
  );
};

export default Switcher;
