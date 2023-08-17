// import { fetchData } from '$lib/SpreadsheetService.svelte';
// import { error } from '@sveltejs/kit';

// export async function load({ params }) {
// 	let jsonData = await fetchData('images');
// 	let filteredData = jsonData.filter((item) => item.category == params.slug);

// 	if (filteredData[0] == undefined) {
// 		throw error(404, 'Not found here');
// 	}
// 	if (params.slug) {
// 		return {
// 			category: params.slug,
// 			content: filteredData
// 		};
// 	}
// }

