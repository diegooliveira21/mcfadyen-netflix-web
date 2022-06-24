import { PayloadAction } from '@reduxjs/toolkit';

export enum Category {
  MOVIE = 'MOVIE',
  TV_SHOWS = 'TV_SHOWS',
}

export type Show = {
  id: number
  title: string
  director: string
  actors: string
  description: string
  cover: string
  category: Category
  episodes: []
};

export type List = Show[];

export type Data = {
  [key: string]: List
};

export type Settings = {
  loading: boolean
};

export type Error = string;

export type Shows = {
  data: Data
  settings: Settings
  error: Error
};

export type BaseReducer<Payload> = (state: Shows, action: PayloadAction<Payload>) => void;

export type GetList = BaseReducer<undefined>;
export type SetData = BaseReducer<Data>;
export type SetSettings = BaseReducer<Settings>;
export type SetError = BaseReducer<Error>;
