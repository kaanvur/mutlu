<script>
  import Images from '$lib/imageView.svelte'
  export let data;
</script>

<h1>Post</h1>

<div class="holder">
  {#if data.content[0] != undefined}
  {#each data.content as blogPost, i}
  {#if blogPost.images[0]}
  <Images image={blogPost.images[0]}/>
  {/if}
  {@html blogPost.content}
  {#if blogPost.images.length > 1}
  {#each blogPost.images as image, i}
    {#if i > 0}
      <Images image={image}/>
    {/if}
  {/each}
  {/if}
  {/each}
  {:else}
  loading...
  {/if}
</div>