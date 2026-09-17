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

export type AboutDetailKind = 'education' | 'location' | 'focus' | 'quality';

export interface AboutDetail {
	kind: AboutDetailKind;
	label: string;
	primary: string;
	secondary: string;
}

export interface AboutContent {
	eyebrow: string;
	title: string;
	paragraphs: readonly string[];
	details: readonly AboutDetail[];
}

export interface SiteContent {
	metadata: SiteMetadata;
	navigation: readonly NavigationItem[];
	hero: HeroContent;
	about: AboutContent;
}
