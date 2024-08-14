'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from '@/components/ui/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const passwordFormSchema = z
  .object({
    currentPassword: z.string().min(6, {
      message: 'Current password must be at least 6 characters.'
    }),
    newPassword: z.string().min(6, {
      message: 'New password must be at least 6 characters.'
    }),
    repeatPassword: z.string().min(6, {
      message: 'Repeat password must be at least 6 characters.'
    })
  })
  .superRefine(({ newPassword, repeatPassword }, ctx) => {
    if (newPassword !== repeatPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['repeatPassword'],
        message: 'Passwords do not match.'
      });
    }
  });

type PasswordFormValues = z.infer<typeof passwordFormSchema>;

export function ChangePasswordForm() {
  const form = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordFormSchema),
    // mode: 'onChange'
  });

  function onSubmit(data: PasswordFormValues) {
    toast({
      title: 'Password change request submitted:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="currentPassword"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Current Password</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your current password"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                {fieldState.error && (
                  <FormMessage className="absolute -bottom-6 left-0">
                    {fieldState.error.message}
                  </FormMessage>
                )}
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your new password"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                {fieldState.error && (
                  <FormMessage className="absolute -bottom-6 left-0">
                    {fieldState.error.message}
                  </FormMessage>
                )}
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="repeatPassword"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Repeat New Password</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Repeat your new password"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                {fieldState.error && (
                  <FormMessage className="absolute -bottom-6 left-0">
                    {fieldState.error.message}
                  </FormMessage>
                )}
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">
          Update password
        </Button>
      </form>
    </Form>
  );
}
