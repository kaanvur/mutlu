<script>
  import Images from '$lib/imageView.svelte'
  export let data;
  const uniqueCategory = Array.from(new Set(data.filteredData.map(({ category }) => category)));
	let selected = "all";
	const filterSelection = (e) => selected = e.target.dataset.category;

</script>
<svelte:head>
	<title>blog</title>
	<meta name="description" content="About this app" />
</svelte:head>
<div class="filter">
  <button type="button" data-category="all" on:click={filterSelection}>tümü</button>
  {#each uniqueCategory as category}
  <button type="button" data-category="{category}" on:click={filterSelection}>{category}</button>
  {/each}
</div>
<div class="text-column">
	  {#if data.filteredData.length > 0}
    {#each data.filteredData as image, i}
      <Images selectedSategory={selected} image={image}/>
    {/each}
  {/if}
</div>
