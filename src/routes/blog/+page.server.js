// export const prerender = true;
// export const trailingSlash = 'always';
import { fetchData } from '$lib/SpreadsheetService';


export async function load(request) {
    let blogData = [];
    let currentURL = request.url.href;
    blogData = await fetchData('blog');

    return {
        blogData: blogData,
        currentURL: currentURL
      };
}