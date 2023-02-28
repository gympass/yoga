import styled from 'styled-components';

const Content = styled.div`
  ${({
    theme: {
      yoga: {
        components: { accordion },
      },
    },
  }) => {
    return `
      padding: 0 ${accordion.padding.standard}px ${accordion.padding.standard}px;
    `;
  }}
`;

export default Content;
