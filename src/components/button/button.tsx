import React from 'react';
import { Props } from 'components/button/button.type';
import { ButtonStyled } from './button.styled';

export default function Button({ onClick, children }: Props) {
  return (
    <ButtonStyled onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}
