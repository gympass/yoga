import styled, { css } from 'styled-components';
import query from './query';

const mobile = query().xxs`
  ${({
    theme: {
      yoga: {
        components: { grid },
      },
    },
  }) => `
    padding-left: ${grid.container.margin.mobile.left}px;
    padding-right: ${grid.container.margin.mobile.right}px;
  `}
`;

const desktop = query().lg`
  ${({
    theme: {
      yoga: {
        components: { grid },
      },
    },
  }) => `
    padding-left: ${grid.container.margin.desktop.left}px;
    padding-right: ${grid.container.margin.desktop.right}px;
  `}
`;

const Container = styled.div`
  box-sizing: border-box;

  margin: 0 auto;
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
        `}
  `}
`;

export default Container;
