import styled, { css } from 'styled-components';
import Text from '../../Text/index.native';
import Box from '../../Box/index.native';
import Button from '../../Button/index.native';

export const Title = styled(Text.H4)`
  ${({
    theme: {
      yoga: { fontSizes },
    },
  }) => css`
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
  ${({
    theme: {
      yoga: { spacing },
    },
  }) => css`
    width: 100%;

    :last-child(:not(:first-child)) {
      margin-top: ${spacing.small}px;
    }

    @media (min-width: 769px) {
      width: auto;

      :last-child(:not(:first-child)) {
        margin-top: 0;
        margin-left: ${spacing.large}px;
      }
    }
  `}
`;

export const PrimaryButton = styled(Button)`
  ${buttonsStyles}
`;

export const SecondaryButton = styled(Button.Text)`
  ${buttonsStyles}
`;

Title.displayName = 'ActionRequirement.Title';
PrimaryButton.displayName = 'ActionRequirement.PrimaryButton';
SecondaryButton.displayName = 'ActionRequirement.SecondaryButton';
