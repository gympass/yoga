import styled, { css } from 'styled-components';
import { media } from '@gympass/yoga-helpers';

const mobile = media.xxs`
  ${({
    theme: {
      yoga: {
        components: { grid },
      },
    },
  }) => `
    margin-left: ${grid.container.margin.mobile.left}px;
    margin-right: ${grid.container.margin.mobile.right}px;
  `}
`;

const desktop = media.lg`
  ${({
    theme: {
      yoga: {
        components: { grid },
      },
    },
  }) => `
    margin-left: ${grid.container.margin.desktop.left}px;
    margin-right: ${grid.container.margin.desktop.right}px;
  `}
`;

const xxxlarge = css`
  ${({
    theme: {
      yoga: {
        breakpoints: {
          xxxl: { width, margin },
        },
      },
    },
  }) => `
    @media (min-width: ${width + margin * 2}px) {
      margin-left: auto;
      margin-right: auto;
    }
  `}
`;

const Container = styled.div`
  box-sizing: border-box;
  ${({
    fluid,
    theme: {
      yoga: {
        components: { grid },
      },
    },
  }) => css`
    ${fluid
      ? 'max-width: 100%;'
      : css`
          max-width: ${grid.container.width}px;
          ${mobile}
          ${desktop}
          ${xxxlarge}
        `}
  `}
`;

export default Container;
