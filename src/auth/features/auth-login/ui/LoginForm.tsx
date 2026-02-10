'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { type z } from 'zod';

import { Button } from '@/shared/ui/Button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/Form';
import { Input } from '@/shared/ui/Input';

import { usePostLoginMutation } from '@/auth/entities/Auth';

import { loginSchema } from '@/auth/schemas/auth.schemas';

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const mutation = usePostLoginMutation(form.getValues());

  const onSubmit = () => {
    mutation.mutate();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
        aria-label="Login form"
      >
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
              <FormMessage />
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
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={mutation.isPending}>
          {mutation.isPending ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </Form>
  );
};
