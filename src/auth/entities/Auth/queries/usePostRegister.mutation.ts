import { useMutation } from '@tanstack/react-query';

import {
  postRegisterRequest,
  type PostRegisterRequestBody,
} from '../api/postRegisterRequest';

import { QUERY_KEYS } from '@/auth/constants/auth.queryKeys';

export const usePostRegisterMutation = (body: PostRegisterRequestBody) => {
  return useMutation({
    mutationKey: [QUERY_KEYS.POST_REGISTER, body],
    mutationFn: async () => await postRegisterRequest(body),
  });
};
