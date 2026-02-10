import client from '@/shared/api/client';

import { AUTH_ENDPOINTS } from '../../../constants/auth.endpoints';

export type PostLoginRequestBody = {
  username: string;
  password: string;
};

export const postLoginRequest = async (body: PostLoginRequestBody) => {
  const { data } = await client.post<{ success: boolean }>(
    AUTH_ENDPOINTS.LOGIN,
    body
  );
  return data;
};
