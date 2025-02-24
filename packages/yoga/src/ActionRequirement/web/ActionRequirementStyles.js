import styled, { css } from 'styled-components';
import { media } from '@gympass/yoga-helpers';
import Text from '../../Text';
import Box from '../../Box';
import Button from '../../Button';

export const Title = styled(Text.H4).attrs({
  bold: true,
})`
  ${({
    theme: {
      yoga: { fontSizes },
    },
  }) => css`
    margin-bottom: 6px;

    @media (min-width: 769px) {
      max-width: 700px;
      font-size: ${fontSizes.huge}px;
      line-height: ${fontSizes.huge}px;
    }
  `}
`;

export const Actions = styled(Box)`
  ${({
    theme: {
      yoga: { spacing },
    },
  }) => css`
    display: flex;
    flex-direction: column;

    @media (min-width: 769px) {
      flex-direction: row;
      margin-top: ${spacing.xlarge}px;
    }
  `}
`;

const buttonsStyles = css`
  width: 100%;

  ${media.lg`
    width: auto;
  `}
`;

export const PrimaryButton = styled(Button)`
  ${buttonsStyles}
`;

export const SecondaryButton = styled(Button.Text)`
  ${({
    theme: {
      yoga: { spacing },
    },
  }) => css`
    ${buttonsStyles}
    ${media.xxs`
      margin-top: ${spacing.small}px;
    `}
    ${media.lg`
      margin-top: 0;
      margin-left: ${spacing.large}px;
    `}
  `}
`;

Title.displayName = 'ActionRequirement.Title';
PrimaryButton.displayName = 'ActionRequirement.PrimaryButton';
SecondaryButton.displayName = 'ActionRequirement.SecondaryButton';
