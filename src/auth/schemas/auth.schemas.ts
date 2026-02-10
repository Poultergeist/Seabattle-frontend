import { z } from 'zod';

import { AUTH_ERRORS } from '@/auth/constants/auth.errors';

export const loginSchema = z.object({
  username: z.string().min(3, AUTH_ERRORS.login_incorrect),
  password: z
    .string()
    .min(8, AUTH_ERRORS.password_incorrect)
    .regex(/[a-zA-Z]/, AUTH_ERRORS.password_incorrect)
    .regex(/\d/, AUTH_ERRORS.password_incorrect),
});

export const registerSchema = loginSchema
  .extend({
    email: z.email(AUTH_ERRORS.email_incorrect),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
