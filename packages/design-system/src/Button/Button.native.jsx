import React, { useState } from 'react';
import styled from 'styled-components';
import { node, func } from 'prop-types';

const Label = styled.Text`
  text-align: center;
  ${({
    theme: {
      components: {
        button: {
          font: { size, weight, color },
        },
      },
    },
  }) => `
    font-size: ${size};
    font-weight: ${weight};
    color: ${color};
  `}
`;

const ButtonContainer = styled.TouchableHighlight`
  ${({
    pressed,
    theme: {
      components: {
        button: {
          backgroundColor,
          border: { width, radius },
          padding: { top, right, bottom, left },
        },
      },
    },
  }) => `
    background-color: ${pressed ? 'green' : backgroundColor};
    padding: ${top}px ${right}px ${bottom}px ${left}px;
    border: ${width};
    border-radius: ${radius}px;
  `}
`;

function Button({ children, onPress, ...rest }) {
  const [pressed, setPressed] = useState(false);

  return (
    <ButtonContainer
      {...rest}
      pressed={pressed}
      onPress={e => {
        setPressed(p => !p);
        onPress(e);
      }}
    >
      <Label>{children}</Label>
    </ButtonContainer>
  );
}

Button.propTypes = {
  children: node,
  onPress: func,
};

Button.defaultProps = {
  children: 'Gympass',
  onPress: () => {},
};

export default Button;
