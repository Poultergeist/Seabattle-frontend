import { useMutation } from '@tanstack/react-query';

import { postLogoutRequest } from '../api';

import { QUERY_KEYS } from '@/auth/constants/auth.queryKeys';

export const usePostLogoutMutation = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.POST_LOGOUT],
    mutationFn: async () => await postLogoutRequest(),
  });
};
