import styled from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';

const Tag = styled.span`
  ${({
    light,
    theme: {
      yoga: {
        colors: { white, gray },
      },
    },
  }) => `
    width: fit-content;
    height: fit-content;
    margin: 5px;
    padding: 5px;
    
    background: ${light ? hexToRgb(white, 0.4) : hexToRgb(gray[2], 0.4)};
    border-radius: 4px;

    font-size: 12px;
    color: #000;
  `};
`;

export default Tag;
