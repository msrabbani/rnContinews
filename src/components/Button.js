import React from 'react';
import {ButtonWrapper, ButtonText} from '../styles';

export default function Button({buttonText, ...rest}) {
  return (
    <ButtonWrapper {...rest}>
      <ButtonText>{buttonText}</ButtonText>
    </ButtonWrapper>
  );
}
