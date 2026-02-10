import { useMutation } from '@tanstack/react-query';

import {
  postLoginRequest,
  type PostLoginRequestBody,
} from '../api/postLoginRequest';

import { QUERY_KEYS } from '@/auth/constants/auth.queryKeys';

export const usePostLoginMutation = (body: PostLoginRequestBody) => {
  return useMutation({
    mutationKey: [QUERY_KEYS.POST_LOGIN, body],
    mutationFn: async () => await postLoginRequest(body),
  });
};
