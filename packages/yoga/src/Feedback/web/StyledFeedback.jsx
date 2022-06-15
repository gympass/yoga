import styled, { css } from 'styled-components';
import Box from '../../Box';
import Button from '../../Button';
import Text from '../../Text';

export const Content = styled.div`
  @media (min-width: 769px) {
    margin: auto;
  }
`;

export const TextContainer = styled.div`
  ${({
    theme: {
      yoga: {
        components: { feedback },
      },
    },
  }) =>
    css`
      max-width: ${feedback.text.maxWidth}px;
    `}}
`;

export const Title = styled(Text.H4).attrs(() => ({
  as: 'p',
}))`
  ${({
    theme: {
      yoga: { fontSizes },
    },
  }) =>
    css`
      @media (min-width: 769px) {
        font-size: ${fontSizes.huge}px;
        line-height: ${fontSizes.huge}px;
      }
    `}}
`;

export const Actions = styled(Box)`
  ${({
    theme: {
      yoga: { spacing },
    },
  }) =>
    css`
      display: flex;
      flex-direction: column;

      @media (min-width: 769px) {
        flex-direction: row;
        margin-top: ${spacing.xxlarge}px;
      }
    `}}
`;

const buttonsStyles = css`
  ${({
    theme: {
      yoga: { spacing },
    },
  }) =>
    css`
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
    `}}
`;

export const PrimaryButton = styled(Button)`
  ${buttonsStyles}
`;

export const SecondaryButton = styled(Button.Text)`
  ${buttonsStyles}
`;

Title.displayName = 'Feedback.Title';
PrimaryButton.displayName = 'Feedback.PrimaryButton';
SecondaryButton.displayName = 'Feedback.SecondaryButton';
