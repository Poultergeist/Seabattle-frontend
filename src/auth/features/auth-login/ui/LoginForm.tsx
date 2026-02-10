'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { type z } from 'zod';

import { PAGES } from '@/shared/config/constants';
import { Button } from '@/shared/ui/Button';
import { Form, FormField, FormItem, FormLabel } from '@/shared/ui/Form';
import { Input } from '@/shared/ui/Input';

import { usePostLoginMutation } from '@/auth/entities/Auth';

import {
  REDIRECT_PARAMS,
  type RedirectParam,
} from '@/auth/constants/auth.redirects';
import { loginSchema } from '@/auth/schemas/auth.schemas';

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const mutation = usePostLoginMutation(form.getValues());

  useEffect(() => {
    if (mutation.data) {
      if (mutation.data.success) {
        const redirectParam = searchParams.get(
          'redirect'
        ) as RedirectParam | null;
        const redirectUrl =
          redirectParam && redirectParam in REDIRECT_PARAMS
            ? REDIRECT_PARAMS[redirectParam]
            : PAGES.GAME_PAGES_ROOT.ROOT;
        navigate(redirectUrl);
      } else {
        // Handle error response
        const errorMessage =
          'message' in mutation.data
            ? String(mutation.data.message)
            : 'unexpected_error';
        form.setError('root', {
          type: 'manual',
          message: errorMessage,
        });
      }
    }
  }, [mutation.error, mutation.data, navigate, form, searchParams]);

  const onSubmit = () => {
    mutation.mutate();
  };

  const hasRootError = form.formState.errors.root;
  const fieldErrors = Object.entries(form.formState.errors)
    .filter(([key]) => key !== 'root')
    .map(([key, error]) => `${key}: ${error?.message}`)
    .join(', ');
  const allErrors = fieldErrors || hasRootError?.message;
  const isFormValid = form.formState.isValid;

  useEffect(() => {
    const subscription = form.watch(() => {
      if (form.formState.errors.root) {
        form.clearErrors('root');
      }
    });

    return () => subscription.unsubscribe();
  }, [form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
        aria-label="Login form"
      >
        {allErrors && (
          <div
            className="border-destructive bg-destructive/10 text-destructive rounded-md border p-3 text-sm"
            role="alert"
          >
            {allErrors}
          </div>
        )}

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{'Username'}</FormLabel>
              <Input
                placeholder="Enter your username"
                aria-label="Username"
                aria-required="true"
                {...field}
              />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{'Password'}</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                autoComplete="off"
                aria-label="Password"
                aria-required="true"
                {...field}
              />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={mutation.isPending || !isFormValid}
        >
          {mutation.isPending ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </Form>
  );
};
