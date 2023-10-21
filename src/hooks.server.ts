import type { Handle } from '@sveltejs/kit';
import { MedusaClient } from '$lib/db/medusa';
import { VITE_MEDUSA_BACKEND_URL } from '$env/static/private';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.medusa = new MedusaClient(VITE_MEDUSA_BACKEND_URL);

	const response = await resolve(event);
	return response;
};
