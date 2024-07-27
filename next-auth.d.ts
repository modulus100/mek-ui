// Ref: https://next-auth.js.org/getting-started/typescript#module-augmentation

import { DefaultSession, DefaultUser } from "next-auth"
import { DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session extends DefaultSession {
    error: string,
    user: {
      // accessToken: string;
      // refreshToken: string;
      // accessTokenExpiresAt: number,
      firstName: string,
      lastName: string,
      id: string,
      roles: string[],
      permissions: string[]
    } & DefaultSession
  }

  interface User extends DefaultUser {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: number,
    firstName: string,
    lastName: string,
    roles: string[],
    permissions: string[]
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresAt: number,
    firstName: string,
    lastName: string,
    roles: string[],
    permissions: string[]
  }
}