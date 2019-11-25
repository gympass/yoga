import styled from 'styled-components';

const InlineCode = styled.code(
  ({
    theme: {
      yoga: {
        colors: { primary: primaryPallete },
      },
    },
  }) => `
  padding: 2px 5px 5px;

  background-color: #f6f8fa;
  border: 1px solid #e2dddd;
  border-radius: 5px;
  color: ${primaryPallete[3]};
  
  font-family: monospace;
  font-size: 14px;

  @media (max-width: 900px) {
    font-size: 12px;
  }
`,
);

export default InlineCode;
