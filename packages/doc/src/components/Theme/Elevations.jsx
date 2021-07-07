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
    border: ${theme.yoga.borders.small}px solid rgba(215, 215, 224, 0.7);
    box-shadow: ${theme.yoga.elevations[value]};

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

const Elevations = ({ theme }) => {
  return (
    <Wrapper>
      <Border theme={theme} value={0}>
        <span>
          <strong>theme.</strong>elevations.zero
          <br />
          <strong>theme.</strong>elevations[0]
        </span>
        <span>
          <strong>value: </strong> {theme.yoga.elevations.zero}
        </span>
      </Border>
      <Border theme={theme} value={1}>
        <span>
          <strong>theme.</strong>elevations.small
          <br />
          <strong>theme.</strong>elevations[1]
        </span>
        <span>
          <strong>value: </strong> {theme.yoga.elevations.small}
        </span>
      </Border>
      <Border theme={theme} value={2}>
        <span>
          <strong>theme.</strong>elevations.medium
          <br />
          <strong>theme.</strong>elevations[2]
        </span>
        <span>
          <strong>value: </strong> {theme.yoga.elevations.medium}
        </span>
      </Border>
      <Border theme={theme} value={3}>
        <span>
          <strong>theme.</strong>elevations.large
          <br />
          <strong>theme.</strong>elevations[3]
        </span>
        <span>
          <strong>value: </strong> {theme.yoga.elevations.large}
        </span>
      </Border>
    </Wrapper>
  );
};

export default withTheme(Elevations);
