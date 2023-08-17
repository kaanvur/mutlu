<script>
  export let data;

</script>
<svelte:head>
	<title>blog</title>
	<meta name="description" content="About this app" />
</svelte:head>

	<h1>Blog</h1>
<div class="text-column">
{#if data.blogData.length > 0}
{#each data.blogData as blogPost, i}
<a href="{data.currentURL + '/detay-' + i}">
  <h3>{blogPost.title}</h3>
  <p>{blogPost.content}</p>
</a>
{/each}
{:else}
loading...
{/if}
</div>