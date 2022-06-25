import { Store } from 'store/store/store.type';

export const loadingSelector = (state: Store) => state.shows.settings.loading;

export const listSelector = (state: Store) => state.shows.data.list;

export const myListSelector = (state: Store) => state.shows.data.myList;
