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

import { usePostRegisterMutation } from '@/auth/entities/Auth';

import { registerSchema } from '@/auth/schemas/auth.schemas';

type RegisterFormData = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const mutation = usePostRegisterMutation(form.getValues());

  const onSubmit = () => {
    mutation.mutate();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
        aria-label="Register form"
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{'Email'}</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                aria-label="Email"
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

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{'Confirm Password'}</FormLabel>
              <Input
                type="password"
                placeholder="Confirm your password"
                autoComplete="off"
                aria-label="Confirm Password"
                aria-required="true"
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={mutation.isPending}>
          {mutation.isPending ? 'Registering...' : 'Register'}
        </Button>
      </form>
    </Form>
  );
};
