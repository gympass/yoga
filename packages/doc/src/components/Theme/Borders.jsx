import React from 'react';
import styled, { withTheme, css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 561px) {
    justify-content: center;
  }
`;

const Border = styled.div`
  ${({ theme, value }) => css`
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    flex-direction: column;
    width: 200px;
    height: 200px;
    margin: 10px 20px 10px 0px;
    padding: 8px;
    background: rgb(255, 255, 255);
    border: ${theme.yoga.borders[value]}px solid rgba(215, 215, 224, 0.7);

    strong {
      font-weight: bold;
    }

    span {
      width: fit-content;
      height: fit-content;
      margin: 5px;
      padding: 5px;
      background: rgba(215, 215, 224, 0.4);
      border-radius: 4px;
      font-size: 12px;
      color: rgb(0, 0, 0);
    }
  `}
`;

const Borders = ({ theme }) => {
  return (
    <Wrapper>
      <Border theme={theme} value={0}>
        <span>
          <strong>theme.</strong>borders.zero
          <br />
          <strong>theme.</strong>borders[0]
        </span>
        <span>
          <strong>value: </strong> {theme.yoga.borders.zero}
        </span>
      </Border>
      <Border theme={theme} value={1}>
        <span>
          <strong>theme.</strong>borders.small
          <br />
          <strong>theme.</strong>borders[1]
        </span>
        <span>
          <strong>value:</strong>
          {theme.yoga.borders.small}
        </span>
      </Border>
      <Border theme={theme} value={2}>
        <span>
          <strong>theme.</strong>borders.medium
          <br />
          <strong>theme.</strong>borders[2]
        </span>
        <span>
          <strong>value:</strong> {theme.yoga.borders.medium}
        </span>
      </Border>
    </Wrapper>
  );
};

export default withTheme(Borders);
