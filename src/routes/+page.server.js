import { fetchData } from '$lib/SpreadsheetService';

export async function load() {
    let jsonData = [];
    let filteredData = [];
    jsonData = await fetchData('images');
    filteredData = jsonData.filter(item => item.category === '');
    let sliderData = [];
    sliderData = await fetchData('slider');
    return {
        filteredData: filteredData,
        sliderData:sliderData,
    }
}