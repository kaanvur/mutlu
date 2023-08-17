<script>
	import { lazyLoad } from '$lib/LazyLoad.svelte';
  import { scale } from 'svelte/transition';
	import Modal from '$lib/Modal.svelte';
	export let image;
	export let selectedSategory = 'all';
	let showModal = false;

</script>

{#if selectedSategory == 'all' || selectedSategory == image.category}
  <div out:scale="{{duration: 500}}" in:scale="{{ delay: 500 }}">
	{#if image.big}
		<img lazy use:lazyLoad={image.url}
			alt={image.alt ? image.alt : ''}
			on:click={() => (showModal = true)}
		/>
		<Modal bind:showModal>
			<img lazy use:lazyLoad={image.big} alt={image.alt} />
		</Modal>
	{:else}
		<img lazy use:lazyLoad={image.url} alt={image.alt ? image.alt : ''} />
	{/if}
</div>
{/if}