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

export interface ProjectLink {
	label: string;
	href: string;
}

export interface ProjectTechnicalItem {
	label: string;
	lines: readonly string[];
}

export interface FlagshipProject {
	label: string;
	category: string;
	title: string;
	claim: string;
	description: string;
	stack: readonly string[];
	features: readonly string[];
	link: ProjectLink;
	endpoint: string;
	technicalItems: readonly ProjectTechnicalItem[];
}

export type SecondaryProjectKind = 'lumind' | 'rsvp';

export interface SecondaryProject {
	kind: SecondaryProjectKind;
	label: string;
	title: string;
	description: string;
	stack: readonly string[];
	details: readonly string[];
	links: readonly ProjectLink[];
}

export interface ProjectsContent {
	eyebrow: string;
	title: string;
	introduction: string;
	flagship: FlagshipProject;
	secondary: readonly SecondaryProject[];
}

export interface SiteContent {
	metadata: SiteMetadata;
	navigation: readonly NavigationItem[];
	hero: HeroContent;
	about: AboutContent;
	projects: ProjectsContent;
}
