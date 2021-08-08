import React from 'react';
import {ButtonWrapper, ButtonText} from './styled';

export const Button = ({title: string}) => (
  <ButtonWrapper>
    <ButtonText>{title}</ButtonText>
  </ButtonWrapper>
);
