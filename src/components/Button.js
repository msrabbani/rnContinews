import React from 'react';
import {Dimensions} from 'react-native';

import styled from 'styled-components/native';

const widthScreen = Dimensions.get('screen').width;
const heightScreen = Dimensions.get('screen').height;

export default function Button({buttonText, ...rest}) {
  return (
    <ButtonWrapper {...rest}>
      <ButtonText>{buttonText}</ButtonText>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.TouchableOpacity`
  height: ${heightScreen / 18}px;
  width: ${widthScreen / 2}px;
  margin-top: 20px;
  margin-bottom: 10px;
  background-color: orange;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: 25px;
  letter-spacing: 1px;
  color: #ffff;
  font-weight: 600;
`;
