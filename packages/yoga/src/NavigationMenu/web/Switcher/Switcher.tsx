import React from 'react';
import styled, { css } from 'styled-components';
import { Skeleton } from '@gympass/yoga';
import Text from '../../../Text';
import Actions from './Actions';
import Box from '../../../Box';

const StyledSwitcher = styled(Box)<{ fill: string; children: React.ReactNode }>`
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

const StyledTextContainer = styled.div`
  flex: 1;
  overflow: hidden;
`;

const StyledTitle = styled(Text.Body2)`
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
      font-weight: ${font.weight.bold};
      flex: 1;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    `}
`;

const StyledSubtitle = styled(Text.Tiny)`
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
      color: ${font.color.default};
    `}
`;

type SwitcherProps = React.ComponentProps<typeof Actions> & {
  avatar: React.ReactElement;
  fill?: string;
  isLoading?: boolean;
  subtitle?: string;
  title?: string;
};

const Switcher = ({
  actions,
  avatar: Avatar,
  fill = 'transparent',
  isLoading = false,
  subtitle,
  title,
  ...actionsProps
}: SwitcherProps) => {
  const hasActions = !!actions?.length;

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
            {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
          </>
        )}
      </StyledTextContainer>

      {hasActions && <Actions actions={actions} {...actionsProps} />}
    </StyledSwitcher>
  );
};

export default Switcher;
