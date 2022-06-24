import {
  GetList,
  SetData,
  SetError,
  SetSettings,
} from 'store/shows/shows.type';

const getList: GetList = (_state, _action) => {};

const setData: SetData = (state, action) => {
  state.data = action.payload;
};

const setSettings: SetSettings = (state, action) => {
  state.settings = { ...state.settings, ...action.payload };
};

const setError: SetError = (state, action) => {
  state.error = action.payload;
};

const reducers = {
  getList,
  setData,
  setSettings,
  setError,
};

export default reducers;
