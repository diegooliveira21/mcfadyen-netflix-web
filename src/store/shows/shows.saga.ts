import { showsActions } from 'store/shows/shows.slice';
import {
  put,
  call,
  cancel,
  select,
  takeLatest,
} from 'redux-saga/effects';
import showsService from 'services/shows/shows';
import { AxiosResponse } from 'axios';
import { Show } from 'store/shows/shows.type';
import { tokenSelector } from 'store/user/user.selector';
import { Data as UserData } from 'store/user/user.type';

function* getList() {
  yield put(showsActions.setSettings({ loading: true }));

  const token: UserData['token'] = yield select(tokenSelector);

  if (!token) {
    yield put(showsActions.setError('User token was not found'));
    yield cancel();
  }

  try {
    const response: AxiosResponse<Show[]> = yield call(
      showsService({ token: token as string }).getList,
    );

    const showsList = response.data.reduce((accumulator, show) => {
      // @ts-ignore
      const categoryKey = accumulator[show.category] || [];

      return {
        ...accumulator,
        [show.category]: categoryKey.concat(show),
      };
    }, {});

    yield put(showsActions.setList(showsList));
  } catch (exception) {
    yield put(showsActions.setError('Error'));
  } finally {
    yield put(showsActions.setSettings({ loading: false }));
  }
}

function* getMyList() {
  yield put(showsActions.setSettings({ loading: true }));

  const token: UserData['token'] = yield select(tokenSelector);

  if (!token) {
    yield put(showsActions.setError('User token was not found'));
    yield cancel();
  }

  try {
    const response: AxiosResponse<Show[]> = yield call(
      showsService({ token: token as string }).getMyList,
    );

    yield put(showsActions.setMyList(response.data));
    yield put(showsActions.setError(''));
  } catch (exception) {
    yield put(showsActions.setError('Error'));
  } finally {
    yield put(showsActions.setSettings({ loading: false }));
  }
}

const showsSaga = [
  takeLatest('shows/getList', getList),
  takeLatest('shows/getMyList', getMyList),
];

export default showsSaga;
