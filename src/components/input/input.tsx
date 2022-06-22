import React from 'react';
import { Props } from 'components/input/input.type';
import { InputStyled } from './input.styled';

export default function Input({
  type,
  name,
  placeholder,
  onChange,
}: Props) {
  return (
    <InputStyled
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
