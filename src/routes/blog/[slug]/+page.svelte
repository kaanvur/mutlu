<script>
	import Images from '$lib/imageView.svelte';
	export let data;
</script>

<h1>Post</h1>

<div class="holder">
	{#await data.streamed.content}
		<p>loading</p>
	{:then data}
		{#if data[0].content != undefined}
			{#each data as blogPost, i}
				{#if blogPost.images[0]}
					<Images image={blogPost.images[0]} />
				{/if}
				{@html blogPost.content}
				{#if blogPost.images.length > 1}
					{#each blogPost.images as image, i}
						{#if i > 0}
							<Images {image} />
						{/if}
					{/each}
				{/if}
			{/each}
		{/if}
	{/await}
</div>
