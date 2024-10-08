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
import { cn } from '@/lib/utils'; // Assuming you have a utility to handle classnames
import { useSession } from 'next-auth/react';

const profileFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.'
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.'
    }),
  surname: z
    .string()
    .min(2, {
      message: 'Surname must be at least 2 characters.'
    })
    .max(30, {
      message: 'Surname must not be longer than 30 characters.'
    }),
  email: z
    .string({
      required_error: 'Please select an email to display.'
    })
    .email()
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function ProfileForm() {
  const { data: session } = useSession();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: session?.user.firstName,
      surname: session?.user.lastName,
      email: session?.user?.email
    },
    mode: 'onChange'
  });

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: 'You submitted the following values:',
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
          name="name"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input placeholder='' {...field} />
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
          name="surname"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Surname</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input placeholder='' {...field} />
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
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input placeholder="m@example.com" {...field} />
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
        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  );
}
