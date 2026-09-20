const initializedSpotlights = new WeakSet<HTMLElement>();

export function setupSpotlights(root: ParentNode = document) {
	const precisePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

	if (!precisePointer.matches || reducedMotion.matches) return;

	root.querySelectorAll<HTMLElement>('[data-spotlight]').forEach((card) => {
		if (initializedSpotlights.has(card)) return;
		initializedSpotlights.add(card);

		let bounds: DOMRect;
		let frame: number | undefined;
		let pointerX = 0;
		let pointerY = 0;

		const renderSpotlight = () => {
			card.style.setProperty('--spotlight-x', `${pointerX - bounds.left}px`);
			card.style.setProperty('--spotlight-y', `${pointerY - bounds.top}px`);
			frame = undefined;
		};

		card.addEventListener('pointerenter', (event) => {
			bounds = card.getBoundingClientRect();
			pointerX = event.clientX;
			pointerY = event.clientY;
			renderSpotlight();
			card.dataset.spotlightActive = '';
		});

		card.addEventListener('pointermove', (event) => {
			pointerX = event.clientX;
			pointerY = event.clientY;

			if (frame === undefined) {
				frame = window.requestAnimationFrame(renderSpotlight);
			}
		});

		card.addEventListener('pointerleave', () => {
			delete card.dataset.spotlightActive;
		});
	});
}
