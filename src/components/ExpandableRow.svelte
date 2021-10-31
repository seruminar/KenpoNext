<script lang="ts">
	let open: boolean = false;
</script>

<div class="group column root" on:click={() => (open = !open)}>
	<div class="item">
		<slot />
	</div>
	{#if open}
		<div class="item">
			<slot name="expanded" />
		</div>
	{/if}
</div>

<style lang="scss">
	.root {
		padding: 0.5em 0em 0.5em 0em;
	}
</style>
