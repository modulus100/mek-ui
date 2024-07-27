import { signOut, useSession } from 'next-auth/react';
import apiClient from '@/client/apiClient';

export const useLogout = () => {
  const { data: session } = useSession();

  return async () => {
    if (!session) {
      return;
    }

    await signOut({ callbackUrl: '/' });

    try {
      await apiClient.POST('/auth/logout', {
        body: {
          accessToken: session.accessToken,
          refreshToken: session.refreshToken
        }
      });
    } catch (error) {
      console.error('Could not logout', error);
    }
  };
};