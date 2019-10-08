import React from 'react';

import styled, { withTheme } from 'styled-components';

const Label = styled.Text`
  color: #fff;
  font-weight: 700;
  align-self: center;
  padding: 10px;
`;

const ButtonContainer = styled.TouchableHighlight`
  background-color: ${({ theme }) => theme.components.button.backgroundColor};
  width: 80%;
  margin-top: 5px;
  border-color: ${({ theme }) => theme.components.button.backgroundColor};
  border-width: 2px;
`;

const Button = props => {
  return (
    <ButtonContainer onPress={props.onPress}>
      <Label>{props.theme.components.button.backgroundColor}</Label>
    </ButtonContainer>
  );
};

export default withTheme(Button);
