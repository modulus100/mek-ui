export type Locale = (typeof locales)[number];

export const locales = ['en', 'ee'] as const;
export const defaultLocale: Locale = 'en';