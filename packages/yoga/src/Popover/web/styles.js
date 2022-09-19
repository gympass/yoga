import styled, { css } from 'styled-components';

import { Text } from '@gympass/yoga';

export const Wrapper = styled.div`
  position: relative;
`;

const popoverContainerPositionModifier = {
  'bottom-start': () => css`
    bottom: -20px;
    left: 0;
    transform: translate(0, 100%);
  `,
  'bottom-center': () => css`
    bottom: -20px;
    left: 50%;
    transform: translate(-50%, 100%);
  `,
  'bottom-end': () => css`
    bottom: -20px;
    right: 0;
    transform: translate(0, 100%);
  `,
  'left-start': () => css`
    left: -20px;
    top: 0;
    transform: translate(-100%, 0);
  `,
  'left-center': () => css`
    left: -20px;
    top: 50%;
    transform: translate(-100%, -50%);
  `,
  'left-end': () => css`
    bottom: 0;
    left: -20px;
    transform: translate(-100%, 0);
  `,
  'top-start': () => css`
    left: 0;
    top: -20px;
    transform: translate(0, -100%);
  `,
  'top-center': () => css`
    left: 50%;
    top: -20px;
    transform: translate(-50%, -100%);
  `,
  'top-end': () => css`
    right: 0;
    top: -20px;
    transform: translate(0, -100%);
  `,
  'right-start': () => css`
    right: -20px;
    top: 0;
    transform: translate(100%, 0);
  `,
  'right-center': () => css`
    right: -20px;
    top: 50%;
    transform: translate(100%, -50%);
  `,
  'right-end': () => css`
    bottom: 0;
    right: -20px;
    transform: translate(100%, 0);
  `,
};

export const PopoverContainer = styled.div`
  ${({
    theme: {
      yoga: { colors, spacing, radii },
    },
    position,
    width,
    height,
  }) => css`
    position: absolute;

    width: max-content;
    max-width: ${width}px;
    height: max-content;
    max-height: ${height}px;

    border-radius: ${radii.small}px;
    background-color: ${colors.stamina};
    padding: ${spacing.small}px;

    ${popoverContainerPositionModifier[position]};
  `}
`;

export const Title = styled(Text.Medium)`
  ${({
    theme: {
      yoga: { spacing },
    },
  }) => css`
    margin: 0;
    margin-bottom: ${spacing.xxxsmall}px;
  `}
`;

export const Description = styled(Text.Small)`
  margin: 0;
`;
