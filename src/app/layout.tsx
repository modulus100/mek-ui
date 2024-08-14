import type { Metadata } from 'next';
// eslint-disable-next-line import/no-unresolved
import { GeistSans } from 'geist/font/sans';

import './globals.css';

import React from 'react';
import { auth } from '../../auth';
import Providers from '@/providers/providers';
import NextTopLoader from 'nextjs-toploader';
import { getLocale, getMessages } from 'next-intl/server';


export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: 'shadcn/ui sidebar',
  description:
    'A stunning and functional retractable sidebar for Next.js built on top of shadcn/ui complete with desktop and mobile responsiveness.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    url: '/',
    title: 'shadcn/ui sidebar',
    description:
      'A stunning and functional retractable sidebar for Next.js built on top of shadcn/ui complete with desktop and mobile responsiveness.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'shadcn/ui sidebar',
    description:
      'A stunning and functional retractable sidebar for Next.js built on top of shadcn/ui complete with desktop and mobile responsiveness.'
  }
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={GeistSans.className}>
        <NextTopLoader
          color="#0FA9C4"
          showSpinner={false}
        />
        <Providers locale={locale} session={session} messages={messages}>{children}</Providers>
      </body>
    </html>
  );
}
