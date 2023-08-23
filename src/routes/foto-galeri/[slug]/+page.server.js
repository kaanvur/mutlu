// import { fetchData } from '$lib/SpreadsheetService.svelte';
// export const trailingSlash = 'always';

// export async function entries() {
//     let jsonData = await fetchData('images');
//     const uniqueCategories = [...new Set(jsonData.map(item => item.category))]
//     .filter(category => category !== '')
//     .map(category => ({ slug: category.toLowerCase().replace(/\s+/g, '-') }));
//     return uniqueCategories;
// }

// export const prerender = true;
import { fetchData } from '$lib/SpreadsheetService';
// import { error } from '@sveltejs/kit';

export async function load({ params }) {
	let filteredData = fetchData('images').then(data => data.filter((item) => {
		return replaceTurkishCharacters(item.category) == params.slug;
	}));

/* 		if (filteredData[0] == undefined) {
			throw error(404, 'Not found here');
		} */
	if(params.slug) {
		return {
			streamed: {
				filteredData
			}
		};
	}
}
function replaceTurkishCharacters(text) {
	const turkishChars = { 'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u' };
	const cleanedText = text.toLowerCase().replace(/[çğıöşü]/g, match => turkishChars[match]).replace(/[^\w\s]/g, "").replace(/\s+/g, "-");
	return cleanedText;
}