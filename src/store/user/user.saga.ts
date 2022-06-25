import userService from 'services/user/user';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthPayload, AuthResponse, ErrorMessageEnum } from 'services/user/user.type';
import userSlice, { initialState } from 'store/user/user.slice';
import { PayloadAction } from '@reduxjs/toolkit';
import { USER_TOKEN_COOKIE } from 'store/user/user.type';
import { AxiosError } from 'axios';

function* authentication(action: PayloadAction<AuthPayload>) {
  try {
    const response: AuthResponse = yield call(userService().auth, action.payload);

    yield put(userSlice.actions.setData(response.data));
    yield put(userSlice.actions.setError(initialState.error));
    localStorage.setItem(USER_TOKEN_COOKIE, response.data.token);
  } catch (exception) {
    // @ts-ignore
    const { response: { data } } = exception as AxiosError;
    // @ts-ignore
    yield put(userSlice.actions.setError(ErrorMessageEnum[data?.message] || ''));
  }
}

function* logoff() {
  const { data } = userSlice.getInitialState();

  yield put(userSlice.actions.setData(data));
  localStorage.removeItem(USER_TOKEN_COOKIE);
}

const userSaga = [
  takeLatest('user/authentication', authentication),
  takeLatest('user/logoff', logoff),
];

export default userSaga;
