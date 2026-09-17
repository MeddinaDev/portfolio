export interface SiteMetadata {
	title: string;
	description: string;
	siteName: string;
	openGraphLocale: string;
	themeColor: string;
}

export interface NavigationItem {
	label: string;
	href: `#${string}`;
}

export interface SocialLink {
	label: string;
	href: string | null;
}

export interface HeroContent {
	eyebrow: string;
	title: string;
	stack: string;
	description: string;
	location: string;
	availability: string;
	projectsLabel: string;
	projectsHref: `#${string}`;
	socialLinks: readonly SocialLink[];
}

export interface SiteContent {
	metadata: SiteMetadata;
	navigation: readonly NavigationItem[];
	hero: HeroContent;
}
