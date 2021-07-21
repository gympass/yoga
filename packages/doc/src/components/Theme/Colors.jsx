import React from 'react';
import styled, { withTheme, css } from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px 10px;
  margin: 30px 0;

  @media (max-width: 564px) {
    grid-template-columns: 1fr;
  }
`;

const BackgroundColor = styled.div`
  ${({ theme, color }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 100px;
    padding: 5px;
    border-radius: 8px;
    background-color: ${theme.yoga.colors[color]};
    color: #f4f4f4;
    font-size: 14px;

    span {
      width: fit-content;
      height: fit-content;
      background-color: rgba(255, 255, 255, 0.4);
      color: #000;
      padding: 5px;
      border-radius: 4px;
    }
  `}
`;

const FeedbackColors = styled.div`
  ${({ theme, color, token }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 100px;
    padding: 5px;
    border-radius: 8px;
    background-color: ${theme.yoga.colors.feedback[color][token]};
    color: #f4f4f4;
    font-size: 14px;

    span {
      width: fit-content;
      height: fit-content;
      background-color: rgba(255, 255, 255, 0.4);
      color: #000;
      padding: 5px;
      border-radius: 4px;
    }
  `}
`;

const TextColors = styled.div`
  ${({ theme, color }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 100px;
    padding: 5px;
    border-radius: 8px;
    background-color: ${theme.yoga.colors.text[color]};
    color: #f4f4f4;
    font-size: 14px;

    span {
      width: fit-content;
      height: fit-content;
      background-color: rgba(255, 255, 255, 0.4);
      color: #000;
      padding: 5px;
      border-radius: 4px;
    }
  `}
`;

const ElementsColors = styled.div`
  ${({ theme, color }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: 100px;
    padding: 5px;
    border-radius: 8px;
    background-color: ${theme.yoga.colors.elements[color]};
    color: #f4f4f4;
    font-size: 14px;

    span {
      width: fit-content;
      height: fit-content;
      background-color: rgba(255, 255, 255, 0.4);
      color: #000;
      padding: 5px;
      border-radius: 4px;
    }
  `}
`;

const Colors = ({ theme }) => {
  return (
    <Wrapper>
      <BackgroundColor theme={theme} color="primary">
        <span>primary</span>
        <span>#D8385E</span>
      </BackgroundColor>
      <BackgroundColor theme={theme} color="secondary">
        <span>secondary</span>
        <span>#231B22</span>
      </BackgroundColor>
      <FeedbackColors theme={theme} color="success" token={0}>
        <span> feedback.success.light </span>
        <span> feedback.success[0] </span>
        <span> #C1EEDB </span>
      </FeedbackColors>
      <FeedbackColors theme={theme} color="success" token={1}>
        <span> feedback.success.dark </span>
        <span> feedback.success[1] </span>
        <span> #1D856C </span>
      </FeedbackColors>
      <FeedbackColors theme={theme} color="informative" token={0}>
        <span> feedback.informative[0] </span>
        <span> #E0DFFF </span>
      </FeedbackColors>
      <FeedbackColors theme={theme} color="informative" token={1}>
        <span> feedback.informative[1] </span>
        <span> #7068D4 </span>
      </FeedbackColors>
      <FeedbackColors theme={theme} color="attention" token={0}>
        <span> feedback.attention[0] </span>
        <span> #FCD6C3 </span>
      </FeedbackColors>
      <FeedbackColors theme={theme} color="attention" token={1}>
        <span> feedback.attention[1] </span>
        <span> #FF874C </span>
      </FeedbackColors>
      <TextColors theme={theme} color="primary">
        <span>text.primary</span>
        <span>#231B22</span>
      </TextColors>
      <TextColors theme={theme} color="secondary">
        <span>text.secondary</span>
        <span> #6B6B78 </span>
      </TextColors>
      <TextColors theme={theme} color="disabled">
        <span>text.disabled</span>
        <span> #D7D7E0 </span>
      </TextColors>
      <ElementsColors theme={theme} color="selectionAndIcons">
        <span>elements.selectionAndIcons</span>
        <span> #9898A6 </span>
      </ElementsColors>
      <ElementsColors theme={theme} color="lineAndBorders">
        <span>elements.lineAndBorders</span>
        <span> #D7D7E0 </span>
      </ElementsColors>
      <ElementsColors theme={theme} color="backgroundAndDisabled">
        <span>elements.backgroundAndDisabled</span>
        <span> #F5F5FA </span>
      </ElementsColors>
    </Wrapper>
  );
};

export default withTheme(Colors);
