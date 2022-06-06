import styled from 'styled-components';

const StyledHeading = styled.header`
  ${({
    theme: {
      yoga: {
        components: { heading },
      },
    },
  }) => {
    return `
    background: ${heading.background};
    padding: ${heading.padding.vertical}px;
    width: 100%;
    min-height: ${heading.height}px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(min-width: 769px) {
        padding: ${heading.padding.vertical}px ${heading.padding.horizontal}px;
    }
  `;
  }}
`;

export const Button = styled.div`
  ${({
    theme: {
      yoga: {
        components: { heading },
      },
    },
  }) => {
    return `
    width: ${heading.button.width}px;
    height: ${heading.button.height}px;
  `;
  }}
`;

export default StyledHeading;
