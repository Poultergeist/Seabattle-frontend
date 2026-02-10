import client from '@/shared/api/client';

import { AUTH_ENDPOINTS } from '@/auth/constants/auth.endpoints';

export type PostRegisterRequestBody = {
  username: string;
  password: string;
  email: string;
};

export const postRegisterRequest = async (body: PostRegisterRequestBody) => {
  const { data } = await client.post<{ success: boolean }>(
    AUTH_ENDPOINTS.REGISTER,
    body
  );
  return data;
};
