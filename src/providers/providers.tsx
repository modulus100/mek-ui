'use client';
import React, { useState } from 'react';
import { SessionProvider, SessionProviderProps } from 'next-auth/react';
import ThemeProvider from '@/providers/theme-provider';
import { IntlConfig, NextIntlClientProvider } from 'next-intl';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Providers({
  session,
  messages,
  locale,
  children
}: {
  session: SessionProviderProps['session'];
  messages: IntlConfig['messages'];
  locale: string;
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SessionProvider refetchInterval={60} session={session}>
              {children}
            </SessionProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </QueryClientProvider>
    </>
  );
}
