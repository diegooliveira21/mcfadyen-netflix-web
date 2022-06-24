import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userSaga from 'store/user/user.saga';
import { showsReducer } from 'store/shows/shows.slice';
import { all } from 'redux-saga/effects';
import showsSaga from 'store/shows/shows.saga';
import userSlice from '../user/user.slice';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    shows: showsReducer,
  },
  middleware: [saga],
});

function* storeSaga() {
  yield all([
    ...userSaga,
    ...showsSaga,
  ]);
}

saga.run(storeSaga);

export default store;
