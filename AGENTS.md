# Reglas permanentes del proyecto

- Construye un portfolio estático con Astro, una sola página y salida estática.
- Usa npm exclusivamente. No introduzcas React ni otros frameworks de UI.
- Prioriza HTML semántico, CSS nativo y TypeScript/JavaScript mínimo.
- No añadas librerías de animación sin aprobación explícita.
- El español vive en `/`; prepara la arquitectura para un futuro `/en/`, sin publicarlo antes de tener contenido revisado.
- Mantén contenido, configuración, estilos y presentación separados.
- Centraliza decisiones visuales reutilizables en `src/styles/tokens.css`.
- Conserva accesibilidad, rendimiento y `prefers-reduced-motion` como requisitos de base.
- No fijes el Hero a `75–88vh`: debe ser protagonista y dejar intuir contenido posterior; su altura se decide al revisar el diseño real.
- La visualización técnica debe conservar este flujo: `HTTP Request → JWT Authentication → Controller/Service → PostgreSQL → 200 OK`.
- Limita cualquier spotlight a superficies importantes para mantener la jerarquía visual.
- No añadas por ahora analítica, formulario de contacto, CV ni un nivel concreto de inglés.
- No inventes el dominio ni nuevas URLs de repositorios o demos; mantenlos fuera de la UI hasta que se definan.
- No hagas commit, push ni despliegue salvo petición expresa.
