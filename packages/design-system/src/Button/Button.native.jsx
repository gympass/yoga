import React from 'react';
import styled from 'styled-components';

const Label = styled.Text`
  color: #fff;
  font-weight: 700;
  align-self: center;
  padding: 10px;
`;

const ButtonContainer = styled.TouchableHighlight`
  background-color: ${({ outline, theme }) =>
    !outline ? theme.colors.primary : theme.colors.secondary};
  width: 80%;
  margin-top: 5px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-width: 2px;
`;

const Button = props => {
  return (
    <ButtonContainer onPress={props.onPress}>
      <Label>{props.children}</Label>
    </ButtonContainer>
  );
};

export default Button;
