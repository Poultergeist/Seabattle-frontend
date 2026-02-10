import axios from 'axios';

import client from '@/shared/api/client';
import type {
  ErrorResponse,
  SuccessResponse,
} from '@/shared/types/apiResponse';

import { AUTH_ENDPOINTS } from '@/auth/constants/auth.endpoints';

export type PostRegisterRequestBody = {
  username: string;
  password: string;
  email: string;
};

export const postRegisterRequest = async (body: PostRegisterRequestBody) => {
  try {
    const { data } = await client.post<SuccessResponse | ErrorResponse>(
      AUTH_ENDPOINTS.REGISTER,
      body
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      return error.response.data as ErrorResponse;
    }
    throw error;
  }
};
