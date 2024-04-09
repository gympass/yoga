import styled, { css } from 'styled-components';
import { Text } from '../..';

export const Wrapper = styled.div`
  position: relative;
`;

const popoverContainerPositionModifier = {
  'bottom-start': () => css`
    bottom: -8px;
    left: 0;
    transform: translate(0, 100%);
  `,
  'bottom-center': () => css`
    bottom: -8px;
    left: 50%;
    transform: translate(-50%, 100%);
  `,
  'bottom-end': () => css`
    bottom: -8px;
    right: 0;
    transform: translate(0, 100%);
  `,
  'left-start': () => css`
    left: -8px;
    top: 0;
    transform: translate(-100%, 0);
  `,
  'left-center': () => css`
    left: -8px;
    top: 50%;
    transform: translate(-100%, -50%);
  `,
  'left-end': () => css`
    bottom: 0;
    left: -8px;
    transform: translate(-100%, 0);
  `,
  'top-start': () => css`
    left: 0;
    top: -8px;
    transform: translate(0, -100%);
  `,
  'top-center': () => css`
    left: 50%;
    top: -8px;
    transform: translate(-50%, -100%);
  `,
  'top-end': () => css`
    right: 0;
    top: -8px;
    transform: translate(0, -100%);
  `,
  'right-start': () => css`
    right: -8px;
    top: 0;
    transform: translate(100%, 0);
  `,
  'right-center': () => css`
    right: -8px;
    top: 50%;
    transform: translate(100%, -50%);
  `,
  'right-end': () => css`
    bottom: 0;
    right: -8px;
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
    $zIndex,
  }) => css`
    position: absolute;
    overflow: auto;
    width: max-content;
    max-width: ${width}px;
    height: max-content;
    max-height: ${height}px;

    border-radius: ${radii.small}px;
    background-color: ${colors.stamina};
    padding: ${spacing.small}px;
    z-index: ${$zIndex};

    ${popoverContainerPositionModifier[position]};
  `}
`;

export const PopoverTitle = styled(Text.Small)`
  ${({
    theme: {
      yoga: { fontWeights, v3theme },
    },
  }) => css`
    font-weight: ${v3theme ? fontWeights.bold : fontWeights.medium};
  `}
`;

export const PopoverButton = styled.button.attrs({ type: 'button' })`
  all: unset;

  ${({
    theme: {
      yoga: { elevations },
    },
  }) => css`
    @media (hover: hover) and (pointer: fine) {
      &:focus {
        box-shadow: ${elevations.small};
        transition: box-shadow ease 0.5s;
      }
    }
  `}
`;
