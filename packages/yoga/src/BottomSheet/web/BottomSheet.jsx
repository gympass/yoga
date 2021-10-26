import React from 'react';
import styled from 'styled-components';
import { func, string, bool } from 'prop-types';
import Box from '../../Box';
import Text from '../../Text';
import Button from '../../Button';

export const Wrapper = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 9999999;
`;

export const BackDrop = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #eff0f2;
  animation: content;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  padding: 0px 20px 0px 20px;
  border-radius: 16px 16px 0px 0px;

  @keyframes content {
    0% {
      bottom: -50rem;
    }

    100% {
      bottom: 0;
    }
  }
`;

const Title = styled(Text)`
  ${({
    theme: {
      yoga: { fontWeights, spacing, lineHeights },
    },
  }) => `
    font-weight: ${fontWeights.medium};
    margin-top: ${spacing.small}px;
    margin-bottom: ${spacing.small}px;
    color: #001027; 
    line-height: ${lineHeights.medium}px;
  `}
`;

const SubTitle = styled(Text.Small)`
  ${({
    theme: {
      yoga: { fontWeights, colors, lineHeights },
    },
  }) => `
    font-weight: ${fontWeights.regular};
    color: ${colors.deep};
    line-height: ${lineHeights.small}px;
  `}
`;

const ButtonStyled = styled(Button)`
  ${({
    theme: {
      yoga: { spacing },
    },
  }) => `
     margin-top: ${spacing.medium}px;
  `}
`;

const ButtonTextStyled = styled(Button.Text)`
  ${({
    theme: {
      yoga: { spacing },
    },
  }) => `
     margin-top: ${spacing.small}px;
  `}
`;

const BottomSheet = ({
  open,
  actionLabel,
  title,
  subTitle,
  onAction,
  onCancel,
}) => {
  return (
    <Wrapper isOpen={open}>
      <BackDrop />
      <Container>
        <Title>{title}</Title>
        {subTitle && <SubTitle>{subTitle}</SubTitle>}
        <ButtonStyled onClick={onAction}>{actionLabel}</ButtonStyled>
        {onCancel && (
          <ButtonTextStyled onClick={onCancel}>Cancel</ButtonTextStyled>
        )}
        <Box height="24" width="100%" />
      </Container>
    </Wrapper>
  );
};

BottomSheet.propTypes = {
  /** Controls the BottomSheet visibility. */
  open: bool,

  /** The title shown when BottomSheet is opened. */
  title: string.isRequired,

  /** The subtitle shown when BottomSheet is opened. */
  subTitle: string,

  /** Label for a custom action. */
  actionLabel: string.isRequired,

  /** Function for the custom action. The `actionLabel` becomes required when passing this function. */
  onAction: func.isRequired,

  /** Function to close the BottomSheet. */
  onCancel: func,
};

BottomSheet.defaultProps = {
  open: false,
  subTitle: undefined,
  onCancel: undefined,
};

export default BottomSheet;
