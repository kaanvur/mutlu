import { fetchData } from '$lib/SpreadsheetService';


export async function load(request) {
  let blogData = [];
  let currentURL = request.url.href;
  blogData = fetchData('blog');

  return {
    streamed: {
      blogData: blogData,
      currentURL: currentURL
    }
  };
}