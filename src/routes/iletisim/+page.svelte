<script>
	export let form;
</script>
<svelte:head>
	<title>İletişim</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
{#if form?.returnData?.result.success}
	<p>Başarılı</p>
{:else}
	<form method="POST" action="?/formSend">
		<div>
			<label for="email">Email</label>
			<input name="email" type="email" value={form?.data.email ?? ''} required />

			{#if form?.errors?.email}
				<p class="error">{form.errors.email}</p>
			{/if}
		</div>
		<div>
			<label for="title">Konu</label>
			<input name="title" type="text" value={form?.data.title ?? ''} required />
			{#if form?.errors?.title}
				<p class="error">{form.errors.user}</p>
			{/if}
		</div>
		<div>
			<label for="message">Mesaj</label>
			<textarea name="message" id="" cols="30" rows="10" required />
			{#if form?.errors?.message}
				<p class="error">{form.errors.message}</p>
			{/if}
		</div>
		<div><button type="submit">Log in</button></div>
	</form>
{/if}

<style>
	.error {
		color: red;
		font-size: 0.8rem;
		margin-top: 0.2rem;
	}
</style>
