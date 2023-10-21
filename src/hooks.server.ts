import type { Handle } from '@sveltejs/kit';

import { MedusaClient } from 'sveltekit-medusa-client';
import { VITE_PUBLIC_MEDUSA_BACKEND_URL } from '$env/static/private';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.medusa = new MedusaClient(VITE_PUBLIC_MEDUSA_BACKEND_URL);
	event = await event.locals.medusa.handleRequest(event);

	const response = await resolve(event);
	return response;
};
