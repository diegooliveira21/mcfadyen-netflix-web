import { Store } from 'store/store/store.type';

export const tokenSelector = (state: Store) => state.user.data.token;

export const errorSelector = (state: Store) => state.user.error;
