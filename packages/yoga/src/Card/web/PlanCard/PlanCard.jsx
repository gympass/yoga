import React from 'react';
import styled, { css } from 'styled-components';
import { node, oneOf, string } from 'prop-types';
import Box from '../../../Box';
import Text from '../../../Text';

export const PLAN_LINE_HEIGHT = 4;
const DISCOUNT_HEIGHT = 28;

const Plan = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 312px;

  overflow: hidden;

  ${props => {
    const theme = props.theme.yoga;
    const { plan } = theme.components.card;

    return css`
      padding: ${plan.padding.top}px ${plan.padding.right}px
        ${plan.padding.bottom}px ${plan.padding.left}px;
      border: ${theme.borders.small}px solid
        ${theme.colors.elements.lineAndBorders};
      border-radius: ${plan.radius}px;

      background-color: ${theme.colors.white};
    `;
  }}
`;

const Border = styled.span`
  ${({ variant, hasRightMask, theme }) => {
    const { spacing, colors } = theme.yoga;
    const color = colors[variant];
    const MASK_SIZE = 112;
    const baseMaskStyle = css`
      position: absolute;
      height: ${MASK_SIZE}px;
      width: ${MASK_SIZE}px;
      content: '';
      background: radial-gradient(
        50% 50% at 50% 50%,
        ${colors.white} 0%,
        transparent 100%
      );
      border-radius: 50%;
    `;

    return css`
      position: absolute;
      top: 0;
      left: 0;

      display: inline-block;
      width: 100%;

      height: ${PLAN_LINE_HEIGHT}px;
      background-color: ${color};

      ::before {
        ${baseMaskStyle}
        left: ${spacing.large}px;
        top: -${MASK_SIZE - DISCOUNT_HEIGHT}px;
        opacity: 0.8;
      }

      ${hasRightMask &&
      css`
        ::after {
          ${baseMaskStyle}
          top: -${MASK_SIZE - DISCOUNT_HEIGHT + PLAN_LINE_HEIGHT}px;
          right: ${spacing.large}px;
          opacity: 0.5;
        }
      `}
    `;
  }}
`;

const DiscountWrapper = styled(Box).attrs({
  ph: 'xsmall',
  pv: 'xxxsmall',
})`
  ${({ bg, theme }) => {
    const { spacing, colors } = theme.yoga;

    return css`
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      min-height: ${DISCOUNT_HEIGHT}px;
      border-bottom-left-radius: ${spacing.small}px;

      ::before {
        content: '';
        position: absolute;
        left: -${DISCOUNT_HEIGHT}px;
        height: ${DISCOUNT_HEIGHT / 2 - PLAN_LINE_HEIGHT}px;
        width: ${DISCOUNT_HEIGHT}px;
        top: ${PLAN_LINE_HEIGHT}px;
        background: transparent;
        border-top-right-radius: ${spacing.small}px;
        box-shadow: ${colors[bg]} ${spacing.xsmall}px -1px;
      }
    `;
  }}
`;

function PlanCard({ children, discount, variant, ...rest }) {
  const hasDiscount = !!discount;

  return (
    <Plan {...rest}>
      {hasDiscount && (
        <DiscountWrapper bg={variant}>
          <Text.Tiny color="white" fontWeight="medium">
            {discount}
          </Text.Tiny>
        </DiscountWrapper>
      )}
      <Border variant={variant} hasRightMask={hasDiscount} />
      {children}
    </Plan>
  );
}

PlanCard.propTypes = {
  children: node,
  discount: string,
  /** style the card border top color following the theme (primary, secondary,
   * vibin, hope, energy, relax, peace, verve, uplift, deepPurple, deep,
   * stamina, dark, medium, light, clear, white) */
  variant: oneOf([
    'primary',
    'secondary',
    'vibin',
    'hope',
    'energy',
    'relax',
    'peace',
    'verve',
    'uplift',
    'deepPurple',
    'stamina',
    'dark',
    'medium',
    'deep',
    'light',
    'clear',
    'white',
  ]),
};

PlanCard.defaultProps = {
  children: undefined,
  discount: undefined,
  variant: 'deepPurple',
};

PlanCard.displayName = 'PlanCard';

export default PlanCard;
