import styled from 'styled-components';

const Footer = styled.footer(
  ({
    theme: {
      yoga: {
        colors: { white, elements },
      },
    },
  }) => `
    grid-area: Footer;
    padding: 20px;

    background-color: ${white};
    box-shadow: 0 -2px 2px ${elements.backgroundAndDisabled};
    color: ${elements.selectionAndIcons};

    text-align: center;
  `,
);

export default Footer;
