import type { SiteContent } from '../../types/site';

export const es = {
	metadata: {
		title: 'Javier Medina — Desarrollador Backend Junior',
		description:
			'Portfolio profesional de Javier Medina, desarrollador backend junior especializado en Java, Spring Boot y PostgreSQL.',
		siteName: 'Portfolio de JM',
		openGraphLocale: 'es_ES',
		themeColor: '#07111f',
	},
	navigation: [
		{ label: 'Sobre mí', href: '#sobre-mi' },
		{ label: 'Proyectos', href: '#proyectos' },
		{ label: 'Tecnologías', href: '#tecnologias' },
		{ label: 'Contacto', href: '#contacto' },
	],
	hero: {
		eyebrow: 'Javier Medina',
		title: 'Desarrollador Backend Junior',
		stack: 'Java · Spring Boot · PostgreSQL',
		description:
			'Construyo APIs REST mantenibles, probadas y orientadas a entornos reales.',
		location: 'Córdoba, España',
		availability: 'Abierto a oportunidades',
		projectsLabel: 'Ver proyectos',
		projectsHref: '#proyectos',
		// Se activarán cuando las URLs públicas definitivas estén aprobadas.
		socialLinks: [
			{ label: 'GitHub', href: null },
			{ label: 'LinkedIn', href: null },
		],
	},
} as const satisfies SiteContent;
