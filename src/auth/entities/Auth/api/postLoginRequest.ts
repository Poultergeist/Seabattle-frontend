import axios from 'axios';

import client from '@/shared/api/client';
import type {
  ErrorResponse,
  SuccessResponse,
} from '@/shared/types/apiResponse';

import { AUTH_ENDPOINTS } from '../../../constants/auth.endpoints';

export type PostLoginRequestBody = {
  username: string;
  password: string;
};

export const postLoginRequest = async (body: PostLoginRequestBody) => {
  try {
    const { data } = await client.post<SuccessResponse | ErrorResponse>(
      AUTH_ENDPOINTS.LOGIN,
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
