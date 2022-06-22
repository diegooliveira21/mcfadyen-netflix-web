import { Store } from 'store/store/store.type';

export const authenticated = (state: Store) => !!state.user.data.email;
