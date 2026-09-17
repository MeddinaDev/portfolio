export interface SiteMetadata {
	title: string;
	description: string;
	siteName: string;
	openGraphLocale: string;
	themeColor: string;
}

export interface SiteContent {
	metadata: SiteMetadata;
}
