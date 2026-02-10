export type LoginRequestData = {
  username: string;
  password: string;
};

export type RegisterRequestData = {
  username: string;
  password: string;
  email: string;
};

export type AuthResponseData = {
  success: boolean;
};
