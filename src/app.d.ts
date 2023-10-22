// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			medusa;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			user: any;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			cart: any;
			sid: string;
			cartid: string;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
