import userService from 'services/user/user';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AuthErrorMessage, AuthPayload, AuthResponse } from 'services/user/user.type';
import userSlice, { initialState } from 'store/user/user.slice';
import { PayloadAction } from '@reduxjs/toolkit';

function* authentication(action: PayloadAction<AuthPayload>) {
  try {
    const response: AuthResponse = yield call(userService().auth, action.payload);

    yield put(userSlice.actions.setData(response.data));
    yield put(userSlice.actions.setError(initialState.error));
  } catch (exception) {
    yield put(userSlice.actions.setError(AuthErrorMessage.UNREACHABLE_AUTHENTICATION));
  }
}

function* sanitizeValues() {
  yield put(userSlice.actions.setError(''));
}

export default function* userSaga() {
  yield takeLatest('user/authentication', authentication);
  yield takeLatest('user/cart', sanitizeValues);
}
