import React, {
  useState,
  useEffect,
  ChangeEvent,
  useCallback,
} from 'react';
import { Grid } from '@mui/material';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Input from 'components/input/input';
import Button from 'components/button/button';
import FormError from 'components/form-error/form-error';
import { authenticated } from 'store/user/user.selector';
import userSlice from 'store/user/user.slice';
import { Error } from 'types/yup';
import { Wrapper } from './login.styled';

export default function Form() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const userAuthenticated = useSelector(authenticated);

  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      setData((prevData) => ({
        ...prevData,
        [target.name]: target.value,
      }));
    },
    [setData],
  );

  const resetError = useCallback(
    (errorMessage: string) => {
      setError(errorMessage);
    },
    [],
  );

  const handleSend = useCallback(
    async () => {
      try {
        const schema = yup.object().shape({
          email: yup.string().required().email(),
          password: yup.string().required(),
        });

        await schema.validate(data);

        resetError('');

        dispatch(userSlice.actions.authentication(data));
      } catch (yupError: unknown) {
        setError((yupError as Error).errors[0]);
      }
    },
    [data],
  );

  useEffect(
    () => {
      console.log(userAuthenticated);
    },
    [userAuthenticated],
  );

  return (
    <Wrapper
      container
      alignContent="center"
      justifyContent="center"
    >
      <Grid item xs={2}>
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={handleChange}
        />
        <FormError message={error} />
        <Button onClick={handleSend}>Entrar</Button>
      </Grid>
    </Wrapper>
  );
}
