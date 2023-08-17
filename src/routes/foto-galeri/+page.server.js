// export const prerender = true;
// export const trailingSlash = 'always';
import { fetchData } from '$lib/SpreadsheetService';

export async function load({ params }) {
    let jsonData = [];
    let filteredData = [];
    jsonData = await fetchData('images');
    filteredData = jsonData.filter(item => item.category != '');

    return {filteredData}
}