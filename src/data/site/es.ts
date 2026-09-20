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
	projects: {
		eyebrow: '02 / Proyectos',
		title: 'Software construido para resolver problemas reales.',
		introduction:
			'Una selección de proyectos donde aplico backend, arquitectura, testing y desarrollo multiplataforma.',
		flagship: {
			label: 'Proyecto destacado',
			category: 'Backend / Java',
			title: 'Lumind Intelligence API',
			claim: 'Backend REST de productividad diseñado con criterios de software mantenible.',
			description:
				'API para autenticación, hábitos, tareas, sesiones Pomodoro, estadísticas y análisis de productividad.',
			stack: ['Java 21', 'Spring Boot 3.5', 'PostgreSQL', 'Flyway'],
			features: [
				'Auth',
				'Hábitos',
				'Tareas',
				'Pomodoro',
				'Estadísticas',
				'Ownership por usuario',
				'OpenAPI / Swagger',
				'Testcontainers PostgreSQL',
				'Arquitectura feature-based',
			],
			link: {
				label: 'Ver código',
				href: 'https://github.com/MeddinaDev/lumind-intelligence-api',
			},
			endpoint: 'POST /api/v1/ai/productivity-analysis',
			technicalItems: [
				{ label: 'Auth', lines: ['JWT stateless', 'Refresh rotation'] },
				{ label: 'Database', lines: ['PostgreSQL', 'Flyway'] },
				{ label: 'Test suite', lines: ['174 tests'] },
				{ label: 'Quality gate', lines: ['JaCoCo', '≥80% instructions', '≥50% branches'] },
				{ label: 'CI', lines: ['mvn clean verify'] },
			],
		},
		secondary: [
			{
				kind: 'lumind',
				label: 'App multiplataforma',
				title: 'Lumind',
				description:
					'Aplicación de productividad personal con tareas, Pomodoro y seguimiento de progreso.',
				stack: ['Flutter', 'Dart', 'BLoC', 'Supabase'],
				details: ['Supabase Auth', 'PostgreSQL', 'Clean Architecture'],
				links: [{ label: 'Ver código', href: 'https://github.com/MeddinaDev/Lumind' }],
			},
			{
				kind: 'rsvp',
				label: 'Web / Serverless',
				title: 'RSVP Event Manager',
				description: 'Confirmación de asistencia para eventos privados.',
				stack: ['JavaScript', 'Supabase', 'PostgreSQL', 'Vercel'],
				details: ['Mobile-first', 'Persistencia serverless', 'Google Maps'],
				links: [
					{ label: 'Demo', href: 'https://rsvp-event-manager-omega.vercel.app/' },
					{ label: 'Código', href: 'https://github.com/MeddinaDev/rsvp-event-manager' },
				],
			},
		],
	},
	technologies: {
		eyebrow: '03 / Tecnologías',
		title: 'Tecnologías con las que construyo y aprendo.',
		introduction:
			'Mi stack se centra en backend con Java y Spring Boot, complementado con Python, bases de datos, testing automatizado y herramientas de desarrollo.',
		core: {
			label: 'Core Backend',
			technologies: [
				{ name: 'Java', emphasis: 'specialty' },
				{ name: 'Spring Boot', emphasis: 'specialty' },
				{ name: 'Python', emphasis: 'pillar' },
				{ name: 'PostgreSQL', emphasis: 'pillar' },
			],
			capabilities: ['REST APIs', 'SQL', 'Maven'],
		},
		groups: [
			{
				kind: 'backend-security',
				label: 'Backend & Seguridad',
				items: ['Spring Security', 'JWT', 'Flyway', 'OpenAPI / Swagger'],
			},
			{
				kind: 'testing',
				label: 'Testing & Calidad',
				items: ['JUnit', 'Mockito', 'Testcontainers', 'JaCoCo'],
			},
			{
				kind: 'tools',
				label: 'Herramientas',
				items: ['Git', 'GitHub', 'GitHub Actions', 'Docker'],
			},
			{
				kind: 'complementary',
				label: 'Complementario',
				items: ['Flutter', 'Dart', 'Supabase', 'Integraciones IA/LLM'],
			},
		],
	},
} as const satisfies SiteContent;
