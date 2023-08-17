// import adapter from '@sveltejs/adapter-static';

// export default {
// 	kit: {
// 		trailingSlash: 'always',
// 		adapter: adapter({
// 			pages: 'build',
// 			assets: 'build',
// 			// fallback: 'index.html',
// 			precompress: false,
// 			strict: true
// 		})
// 	},
// };
import adapter from '@sveltejs/adapter-cloudflare';

export default {
  kit: {
    adapter: adapter({
      // See below for an explanation of these options
      routes: {
        include: ['/*'],
        exclude: ['<all>']
      }
    })
  }
};