/** @type {import('./$types').PageLoad} */

import { mockProducts } from '$lib/mockProducts';

export function load({ params }) {
	return {
		products : mockProducts
	};
}