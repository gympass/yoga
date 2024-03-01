import styled, { css } from 'styled-components';
import Box from '../../Box';

const StyledHeading = styled(Box).attrs(props => ({
  as: 'header',
  bg: props.theme.yoga.components.heading,
  ...props,
}))`
  ${({
    noPadding,
    theme: {
      yoga: {
        components: { heading },
      },
    },
  }) => {
    return css`
      padding: ${heading.padding.vertical}px ${heading.padding.horizontal}px;
      min-height: ${heading.height}px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      ${noPadding
        ? 'padding: 0'
        : `@media (min-width: 769px) {
        padding: ${heading.padding.vertical}px ${heading.padding.horizontal}px;
      }`};
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
