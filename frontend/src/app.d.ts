// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			user: { id: string; name: string } | null;
	}

	interface PageData {
			user: { id: string; name: string } | null;
	}

	interface Platform {}
		// interface Error {}
		// interface PageState {}
	}
}

export {};
