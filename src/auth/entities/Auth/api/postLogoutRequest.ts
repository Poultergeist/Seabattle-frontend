import client from '@/shared/api/client';
import type {
  ErrorResponse,
  SuccessResponse,
} from '@/shared/types/apiResponse';

import { AUTH_ENDPOINTS } from '@/auth/constants/auth.endpoints';

export const postLogoutRequest = async () => {
  const { data } = await client.post<SuccessResponse | ErrorResponse>(
    AUTH_ENDPOINTS.LOGOUT
  );
  return data;
};
