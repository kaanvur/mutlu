<script>
	import Images from '$lib/imageView.svelte';
	export let data;
	let selected = 'all';
	let uniqueCategory;
	(async function () {
		const x = await data.streamed.filteredData;
		uniqueCategory = Array.from(new Set(x.map(({ category }) => category)));
	})();
	const filterSelection = (e) => (selected = e.target.dataset.category);
</script>

<svelte:head>
	<title>blog</title>
	<meta name="description" content="About this app" />
</svelte:head>
<div class="filter">
	<button type="button" data-category="all" on:click={filterSelection}>tümü</button>
	{#await data.streamed.filteredData then data}
		{#each uniqueCategory as category}
			<button type="button" data-category={category} on:click={filterSelection}>{category}</button>
		{/each}
	{/await}
</div>
<div class="text-column">
	{#await data.streamed.filteredData}
		<p>loading</p>
	{:then data}
		{#each data as image, i}
			<Images selectedSategory={selected} {image} />
		{/each}
	{/await}
</div>
