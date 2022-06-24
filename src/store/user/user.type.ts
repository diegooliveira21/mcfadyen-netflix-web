export type Data = {
  email?: string
  token?: string
  refreshToken?: string
};

export type User = {
  data: Data
  error: string
};

export const USER_TOKEN_COOKIE = 'USER_TOKEN';
