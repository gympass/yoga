import React from 'react';
import styled, { withTheme, css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  span {
    padding: 8px 0;

    :nth-child(2) {
      font-weight: bold;
    }
  }
`;

const Border = styled.div`
  ${({ theme, value }) => css`
    height: 20px;
    width: 20px;
    border-color: ${theme.yoga.colors.secondary};
    border-top-left-radius: ${theme.yoga.radii[value]}px;
    border: 2px;
    border-style: solid;
    border-right: none;
    border-bottom: none;
  `}
`;

const Shape = ({ theme }) => {
  return (
    <Wrapper>
      <Content>
        <Border theme={theme} value={0} />
        <span>Sharp</span>
        <span>radii.sharp</span>
        <span>
          value: <strong> 0 </strong>
        </span>
      </Content>
      <Content>
        <Border theme={theme} value={1} valueWidth={90} />
        <span>Xsmall</span>
        <span>radii.xsmall</span>
        <span>
          value: <strong> 4 </strong>
        </span>
      </Content>
      <Content>
        <Border theme={theme} value={2} valueWidth={90} />
        <span>Small</span>
        <span>radii.small</span>
        <span>
          value: <strong> 8 </strong>
        </span>
      </Content>
      <Content>
        <Border theme={theme} value={3} valueWidth={90} />
        <span>Regular</span>
        <span>radii.regular</span>
        <span>
          value: <strong> 16 </strong>
        </span>
      </Content>
      <Content>
        <Border theme={theme} value={4} valueWidth={36} />
        <span>Circle</span>
        <span>radii.circle</span>
        <span>
          value: <strong> 9999 </strong>
        </span>
      </Content>
    </Wrapper>
  );
};

export default withTheme(Shape);
