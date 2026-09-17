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
		stack: 'Java · Spring Boot · Python · PostgreSQL',
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
	about: {
		eyebrow: '01 / Sobre mí',
		title: 'Desarrollo software con mentalidad backend.',
		paragraphs: [
			'Soy desarrollador backend junior, graduado en Desarrollo de Aplicaciones Multiplataforma. Mi foco principal está en Java y Spring Boot, complementándolo con Python para backend, automatización y soluciones relacionadas con datos e IA.',
			'Me interesa desarrollar software que no solo funcione, sino que sea fácil de mantener, probar y evolucionar.',
		],
		details: [
			{
				kind: 'education',
				label: 'Formación',
				primary: 'DAM',
				secondary: 'Desarrollo de Aplicaciones Multiplataforma',
			},
			{
				kind: 'location',
				label: 'Ubicación',
				primary: 'Córdoba',
				secondary: 'España',
			},
			{
				kind: 'focus',
				label: 'Enfoque',
				primary: 'Backend',
				secondary: 'Java · Spring Boot · Python',
			},
			{
				kind: 'quality',
				label: 'Testing & Calidad',
				primary: 'JUnit · Mockito · Testcontainers',
				secondary: 'JaCoCo · CI',
			},
		],
	},
} as const satisfies SiteContent;
