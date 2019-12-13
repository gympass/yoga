import styled from 'styled-components';

const TabBar = styled.nav(
  ({
    theme: {
      yoga: {
        colors: { gray: grayPallete },
      },
    },
  }) => `
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 64px;
  width: 100%;
  
  background-color: #fff;
  box-shadow: 0 -2px 2px ${grayPallete[1]};
  color: ${grayPallete[7]};

  z-index: 2;

  @media (min-width: 900px) { 
    display: none;
  }
`,
);

export default TabBar;
