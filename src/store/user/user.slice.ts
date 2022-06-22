import { createSlice } from '@reduxjs/toolkit';
import { User } from 'store/user/user.type';
import reducers from './user.reducer';

export const initialState: User = {
  data: {},
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  reducers,
  initialState,
});

export default userSlice;
