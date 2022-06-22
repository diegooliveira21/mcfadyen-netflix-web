import React from 'react';
import { Props } from 'components/form-error/form-error.type';
import { Error } from './form-error.styled';

export default function FormError({ message }: Props) {
  return (
    <Error>
      {message}
    </Error>
  );
}
