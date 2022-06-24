import { User } from 'store/user/user.type';
import { Shows } from 'store/shows/shows.type';

export type Store = {
  user: User
  shows: Shows
};
