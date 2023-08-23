<script>
	import Layout from '$lib/layout_gallerydetail.svelte';
	import Images from '$lib/imageView.svelte';
	export let data;
</script>

{#await data.streamed.filteredData}
	<p>loading</p>
{:then content}
	<Layout title={content[0].category}>
		<p>Bu Sayfa {content[0].category} içeriğidir.</p>
		{#if content[0] != undefined}
			{#each content as image, i}
				<Images {image} />
			{/each}
		{/if}</Layout
	>
{/await}
