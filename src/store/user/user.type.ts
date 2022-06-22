export type Data = {
  email?: string
  token?: string
  refreshToken?: string
};

export type User = {
  data: Data
  error: string
};
