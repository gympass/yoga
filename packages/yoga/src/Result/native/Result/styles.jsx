import styled from 'styled-components';

import Box from '../../../Box';

export const StyledBox = styled(Box)`
  width: 100%;
  border-bottom-width: ${({ divided }) => (divided ? 1 : 0)}px;
  border-bottom-color: ${({
    theme: {
      yoga: {
        colors: {
          elements: { lineAndBorders },
        },
      },
    },
  }) => lineAndBorders};
`;

export const Content = styled.View`
  flex: 1;
  ${({
    theme: {
      yoga: {
        spacing: { small, large },
      },
    },
  }) => {
    return `
      margin-left: ${small}px;
      margin-bottom: ${large}px;
    `;
  }}
`;
