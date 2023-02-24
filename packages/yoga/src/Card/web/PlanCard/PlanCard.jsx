import React from 'react';
import styled, { css } from 'styled-components';
import { node, oneOf, string } from 'prop-types';
import Box from '../../../Box';
import Text from '../../../Text';

export const PLAN_LINE_HEIGHT = 4;

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
      border: ${theme.borders.small}px solid ${theme.colors.light};
      border-radius: ${plan.radius}px;

      background-color: ${theme.colors.white};
    `;
  }}
`;

const Border = styled.span`
  position: absolute;
  top: 0;
  left: 0;

  display: inline-block;
  width: 100%;

  height: ${PLAN_LINE_HEIGHT}px;
  background-color: ${({
    variant,
    theme: {
      yoga: {
        colors: { deepPurple, [variant]: color = deepPurple },
      },
    },
  }) => color};
`;

const DiscountWrapper = styled(Box).attrs({
  ph: 'xsmall',
  pv: 'xxxsmall',
})`
  ${({ bg, theme }) => {
    const MIN_WRAPPER_HEIGHT = 28;
    const baseCurveStyle = css`
      content: '';
      position: absolute;
      left: -${MIN_WRAPPER_HEIGHT}px;
      height: ${MIN_WRAPPER_HEIGHT}px;
      width: ${MIN_WRAPPER_HEIGHT}px;
    `;

    return css`
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      min-height: ${MIN_WRAPPER_HEIGHT}px;
      border-bottom-left-radius: 16px;

      ::before {
        ${baseCurveStyle}
        top: 0;
        background: ${theme.yoga.colors[bg]};
      }

      ::after {
        ${baseCurveStyle}
        top: ${PLAN_LINE_HEIGHT}px;
        background: ${theme.yoga.colors.white};
        border-top-right-radius: ${MIN_WRAPPER_HEIGHT / 2 - PLAN_LINE_HEIGHT}px;
      }
    `;
  }}
`;

function PlanCard({ children, discount, variant, ...rest }) {
  return (
    <Plan {...rest}>
      {discount && (
        <DiscountWrapper bg={variant}>
          <Text.Tiny color="white" fontWeight="medium">
            {discount}
          </Text.Tiny>
        </DiscountWrapper>
      )}
      <Border variant={variant} />
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
