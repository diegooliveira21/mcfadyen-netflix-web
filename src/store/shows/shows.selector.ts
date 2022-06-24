import { Store } from 'store/store/store.type';

export const loadingSelector = (state: Store) => state.shows.settings.loading;

export const dataSelector = (state: Store) => state.shows.data;
