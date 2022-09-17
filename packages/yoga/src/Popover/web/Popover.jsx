import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { node, number, oneOf, string } from 'prop-types';

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

export const Title = styled.p`
  ${({
    theme: {
      yoga: { colors, fontSizes, fontWeights, spacing },
    },
  }) => css`
    color: ${colors.white};
    font-size: ${fontSizes.medium}px;
    font-weight: ${fontWeights.medium};

    margin: 0;
    margin-bottom: ${spacing.xxxsmall}px;
  `}
`;

export const Description = styled.p`
  ${({
    theme: {
      yoga: { colors, fontSizes, fontWeights, spacing },
    },
  }) => css`
    color: ${colors.white};
    font-size: ${fontSizes.medium}px;
    font-weight: ${fontWeights.regular};
    line-height: ${spacing.medium}px;

    margin: 0;
  `}
`;

function Popover({
  children,
  title,
  description,
  position,
  width,
  height,
  ...props
}) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  function handleShowPopover() {
    setIsPopoverOpen(true);
  }

  function handleHidePopover() {
    setIsPopoverOpen(false);
  }

  return (
    <Wrapper {...props}>
      {isPopoverOpen && (
        <PopoverContainer position={position} width={width} height={height}>
          {!!title && <Title>{title}</Title>}
          <Description>{description}</Description>
        </PopoverContainer>
      )}

      <div onMouseEnter={handleShowPopover} onMouseLeave={handleHidePopover}>
        {children}
      </div>
    </Wrapper>
  );
}

Popover.propTypes = {
  children: node.isRequired,
  title: string,
  description: string.isRequired,
  /** Position of the popover relative to the children. Accepted values: bottom-[start|center|end], left-[start|center|end], top-[start|center|end] or right-[start|center|end] */
  position: oneOf([
    'bottom-start',
    'bottom-center',
    'bottom-end',
    'left-start',
    'left-center',
    'left-end',
    'top-start',
    'top-center',
    'top-end',
    'right-start',
    'right-center',
    'right-end',
  ]),
  width: number,
  height: number,
};

Popover.defaultProps = {
  title: undefined,
  position: 'bottom-center',
  width: 265,
  height: 116,
};

export default Popover;
