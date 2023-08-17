<script>
  import Layout from '$lib/layout_gallerydetail.svelte';
  import Images from '$lib/imageView.svelte'
  export let data;
</script>

<Layout title="{data.category}">
<p>Bu Sayfa {data.category} içeriğidir.</p>
  {#if data.content[0] != undefined}
    {#each data.content as image, i}
      <Images image={image}/>
    {/each}
  {/if}</Layout>
