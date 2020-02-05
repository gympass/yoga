import { css } from 'styled-components';

const slideInUp = value => css`
  transform: translateY(-${value}%);
  transition: transform 0.3s;
`;

const slideInDown = value => css`
  transform: translateY(${value}%);
  transition: transform 0.3s;
`;

/*
const slideStyle = {
  top: 0,
  transition: 'top 0.3s',
};

const Slide = ({ children }) => {
  const component = React.cloneElement(React.Children.toArray(children)[0], {
    style: { ...slideStyle },
  });
  return <>{component}</>;
};
*/

export { slideInUp, slideInDown };
