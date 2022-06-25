import {
  GetList,
  SetList,
  SetError,
  SetSettings, SetMyList,
} from 'store/shows/shows.type';

const getList: GetList = (_state, _action) => {};

const getMyList: GetList = (_state, _action) => {};

const setList: SetList = (state, action) => {
  state.data.list = action.payload;
};

const setMyList: SetMyList = (state, action) => {
  state.data.myList = action.payload;
};

const setSettings: SetSettings = (state, action) => {
  state.settings = { ...state.settings, ...action.payload };
};

const setError: SetError = (state, action) => {
  state.error = action.payload;
};

const reducers = {
  getList,
  setList,
  setError,
  getMyList,
  setMyList,
  setSettings,
};

export default reducers;
