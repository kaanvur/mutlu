<script>
	export let data;
</script>

<svelte:head>
	<title>blog</title>
	<meta name="description" content="About this app" />
</svelte:head>

<h1>Blog</h1>
<div class="text-column">
	{#await data.streamed.blogData}
		<p>loading</p>
	{:then blogData}
		{#each blogData as blogPost, i}
			<a data-sveltekit-preload-data="tap" href={data.streamed.currentURL + '/detay-' + i}>
				<h3>{blogPost.title}</h3>
				<p>{blogPost.content}</p>
			</a>
		{/each}
	{/await}
</div>
