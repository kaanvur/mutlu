// import { fetchData } from '$lib/SpreadsheetService.svelte';
// export const trailingSlash = 'always';

// export async function entries() {
//     let jsonData = await fetchData('blogDetay');
//     const uniqueCategories = [...new Set(
//         jsonData.map((item, index) => ({
//             slug: `detay-${index}`
//           }))
//     )]
//     return uniqueCategories;
//     return [
//         { slug: 'detay-1' },
// 		{ slug: 'detay-2' },
// 		{ slug: 'detay-3' }
//     ];
// }

// export const prerender = true;

import { fetchData } from '$lib/SpreadsheetService';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    let blogData = await fetchData('blogDetay');

    blogData = [blogData[params.slug.split('-')[1]]];
	if (blogData[0] == undefined) {
		throw error(404, 'Not found here');
	}
	const manipulatedData = blogData.map((entry) => {
		const images = [];
		for (let i = 1; entry[`images${i}`]; i++) {
			images.push({ url: entry[`images${i}`] });
		}
		return {
			content: entry.content,
			images: images
		};
	});
	if (params.slug) {
		return {
			category: params.slug,
			content: manipulatedData
		};
	}
}