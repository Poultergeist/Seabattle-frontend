import client from '@/shared/api/client';

import { AUTH_ENDPOINTS } from '@/auth/constants/auth.endpoints';

export const postLogoutRequest = async () => {
  const { data } = await client.post<{ success: boolean }>(
    AUTH_ENDPOINTS.LOGOUT
  );
  return data;
};
