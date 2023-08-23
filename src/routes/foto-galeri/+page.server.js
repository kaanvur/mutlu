import { fetchData } from '$lib/SpreadsheetService';

export async function load({ params }) {
    let filteredData = [];
    filteredData = fetchData('images').then(data => data.filter(item => item.category != ''));
    return {
        streamed: {
            filteredData
        }
    }
}