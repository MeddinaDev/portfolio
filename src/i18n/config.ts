export const defaultLocale = 'es' as const;

export const supportedLocales = ['es', 'en'] as const;
export type Locale = (typeof supportedLocales)[number];

export const localePaths = {
	es: '/',
	en: '/en/',
} as const satisfies Record<Locale, string>;

export function isLocale(value: string): value is Locale {
	return supportedLocales.includes(value as Locale);
}
