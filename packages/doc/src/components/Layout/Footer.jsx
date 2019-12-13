import styled from 'styled-components';

const Footer = styled.footer(
  ({
    theme: {
      yoga: {
        colors: { gray: grayPallete },
      },
    },
  }) => `
    grid-area: Footer;
    padding: 20px;

    background-color: #fff;
    box-shadow: 0 -2px 2px ${grayPallete[1]};
    color: ${grayPallete[7]};

    text-align: center;
  `,
);

export default Footer;
