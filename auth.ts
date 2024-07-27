import NextAuth, { NextAuthConfig } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import apiClient from '@/client/apiClient';

const authConfig = {
  providers: [
    CredentialProvider({
      credentials: {
        email: { type: 'email' },
        password: { type: 'password' }
      },
      async authorize(credentials, req) {
        const { data } = await apiClient.POST('/auth/login', {
          body: {
            email: credentials?.email as string,
            password: credentials?.password as string
          }
        });

        if (data?.token.accessToken) {
          return {
            accessToken: data.token.accessToken,
            refreshToken: data.token.refreshToken,
            accessTokenExpiresAt: data.token.accessTokenExpiresAt,
            email: data.user.email,
            firstName: data.user.firstName,
            lastName: data.user.lastName,
            roles: [] as string[],
            permissions: [] as string[],
          };
        }

        return null;
      }
    })
  ],
  debug: true,
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      // Initial sign in
      if (user) {
        token.accessToken = user.accessToken;
        token.accessTokenExpiresAt = user.accessTokenExpiresAt;
        token.refreshToken = user.refreshToken;
        token.email = user.email;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.roles = user.roles;
        token.permissions = user.permissions;
      }

      // Check if the access token has expired
      const dateNowInSeconds = Math.floor(Date.now() / 1000);
      const isTokenExpired = token.accessTokenExpiresAt && dateNowInSeconds > token.accessTokenExpiresAt;

      if (isTokenExpired) {
        try {
          const { data } = await apiClient.POST('/auth/refresh-token', {
            body: {
              refreshToken: token.refreshToken
            }
          });

          if (data && data.token.accessToken) {
            token.accessToken = data.token.accessToken;
            token.accessTokenExpiresAt = data.token.accessTokenExpiresAt;
            token.refreshToken = data.token.refreshToken;
          }
        } catch (error) {
          console.error('Error refreshing access token:', error);
          // Handle token refresh error, e.g., by returning an error token
          token.error = 'RefreshAccessTokenError';
        }
      }

      return token;
    },
    session: async ({ session, token }) => {
      session.user = {
        ...session.user,
        email: token.email as string,
        firstName: token.firstName,
        lastName: token.lastName,
        roles: token.roles,
        permissions: token.permissions,
      };

      if (token.error) {
        session.error = token.error as string;
      }

      return session;
    },
  },
} satisfies NextAuthConfig;

export default authConfig;

export const { auth, handlers, signOut, signIn } = NextAuth(authConfig);
