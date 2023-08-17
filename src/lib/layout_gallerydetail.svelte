<script>
  export let title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<main>
  <h1>{title}</h1>
  <slot></slot>
</main>

<style>
  main {
    padding: 20px;
    background-color: #f2f2f2;
  }
</style>